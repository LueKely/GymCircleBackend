import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import { Register } from '../types/types';
import { Login } from '../types/types';
import bcrypt from 'bcrypt';

export default {
	// put register user
	async register(req: Request, res: Response, next: NextFunction) {
		const user: Register = req.body;

		// encrypt password
		const genSalt = await bcrypt.hash(user.password, 10).then(function (hash) {
			return hash;
		});
		// foot note: di ko inaad ung user_id
		const data = await sqlExe(
			'INSERT INTO user (name,email,password,age,address,tier,points) VALUES (?,?,?,?,?,?,?)',
			[
				user.Name,
				user.userEmail,
				genSalt,
				user.Age,
				user.Address,
				user.Tier,
				user.Points,
			]
		);

		res.send('successful').status(200);
	},

	// compare the password
	async logInReq(req: Request, res: Response, next: NextFunction) {
		const user: Login = req.body;

		// get hash from db
		const query = 'SELECT password, user_id FROM user WHERE email = ?';
		const params = [user.userEmail];
		const hash = await sqlExe(query, params);

		if (hash.length === 0) {
			return res.status(400).send('Invalid Email');
		}

		// compare hash from request input
		const compare = await bcrypt.compare(user.password, hash[0].password);

		if (!compare) {
			return res.status(400).send('Invalid password');
		}

		// Generate token
		const authUser = { payload: hash[0].user_id, permission: 'user' };
		const key = process.env.SECRETKEY;

		if (!key) {
			throw new Error('SECRETKEY is not defined in the environment variables.');
		}

		const token = jwt.sign(authUser, key, { expiresIn: '3d' });
		// console.log(hash[0].user_id);

		res.send(token);
	},
};
