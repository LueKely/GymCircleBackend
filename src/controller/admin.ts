import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import { Admin } from '../types/types';
import { EditUser } from '../types/types';

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
			'INSERT INTO admin (email,name,password) VALUES (?, ?, ? ) ;';

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
	async getAllUsers(req: Request, res: Response, next: NextFunction) {
		const query: string =
			'SELECT * FROM user JOIN attendance ON user.user_id = attendance.user_id';
		const data = await sqlExe(query);
		res.send(data);
	},
	async updateUser(req: Request, res: Response, next: NextFunction) {
		const user: EditUser = req.body;
		const query: string =
			'UPDATE user SET  name = ?, email = ?, age = ?, address = ?, tier = ? , points = ? WHERE user_id = ? ';

		await sqlExe(query, Object.values(user));

		res.send('successful');
	},
	async deleteUser(req: Request, res: Response, next: NextFunction) {
		const userId = req.params.id;
		const query: string = 'DELETE FROM user WHERE user_id = ?';

		await sqlExe(query, [userId]);

		res.send('SUCCESS');
	},
	async getAllTransactions(req: Request, res: Response, next: NextFunction) {
		const query = 'SELECT * FROM transaction_history ';
		const data = await sqlExe(query);
		res.send(data);
	},
	async updateTransaction(req: Request, res: Response, next: NextFunction) {
		const query = 'UPDATE transaction_history SET status = ? WHERE id = ? ';
		const newStatus: string = req.body.status;
		const id = req.params.id;

		if (newStatus != 'paid' && newStatus != 'not paid')
			return res.sendStatus(400);

		await sqlExe(query, [newStatus, id]);
		res.send('Success');
	},
	async addAttendance(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const query = 'UPDATE attendance SET days = days+1 WHERE user_id = ?';
		const data: any = await sqlExe(query, [id]);

		if (data.affectedRows == 0) {
			return res.sendStatus(400);
		}

		res.send('success');
	},
};
