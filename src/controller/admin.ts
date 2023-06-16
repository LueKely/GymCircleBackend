import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '../types/types';

export default {
	async validatePhrase(req: Request, res: Response, next: NextFunction) {
		const phraseInput = req.body.phrase;
		//  get data
		const query = 'SELECT phrase FROM secret_phrase WHERE phrase_id = 0 ';
		const data = await sqlExe(query);
		const key = process.env.SECRETKEY;
		const payload = { permission: 'admin' };

		if (!key) {
			throw new Error('No environment key detected');
		}

		const compare = await bcrypt.compare(phraseInput, data[0].phrase);

		if (!compare) {
			return res.status(400).send('error bro');
		}

		const token = jwt.sign(payload, key, { expiresIn: '3d' });

		res.send(token);
	},
	async changePhrase(req: Request, res: Response, next: NextFunction) {
		const phraseInput = req.body.phrase;

		const query = 'UPDATE secret_phrase SET phrase = ? WHERE phrase_id = 0';
		const genSalt = await bcrypt.hash(phraseInput, 10).then(function (hash) {
			return hash;
		});

		sqlExe(query, [genSalt]);

		res.status(200).send('SUCCESS');
	},
	async registerAdmin(req: Request, res: Response, next: NextFunction) {
		const admin: Admin = req.body;
		const query: string =
			'INSERT INTO admin (name,email,password) VALUES (?, ?, ? ) ;';

		const genSalt = await bcrypt.hash(admin.password, 10).then(function (hash) {
			return hash;
		});

		admin.password = genSalt;

		console.log(admin.password);

		await sqlExe(query, Object.values(admin));
		res.status(200).send('successful');
	},
	async loginAdmin(req: Request, res: Response, next: NextFunction) {
		const admin: Admin = req.body;

		const query = 'SELECT admin_id,password FROM admin WHERE email = ?;';
		const data = await sqlExe(query, [admin.userEmail]);

		if (data.length === 0) {
			return res.status(400).send('Invalid Email');
		}
		const compare = await bcrypt.compare(admin.password, data[0].password);

		if (!compare) {
			return res.status(400).send('Invalid password');
		}

		// Generate token
		const authAdmin = { payload: data[0].admin_id, permission: 'admin login' };
		const key = process.env.SECRETKEY;

		if (!key) {
			throw new Error('SECRETKEY is not defined in the environment variables.');
		}

		const token = jwt.sign(authAdmin, key, { expiresIn: '3d' });

		res.send(token);
	},
};
