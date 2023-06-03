import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import { Register } from '../types/types';

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
				user.tier,
				user.Points,
			]
		);

		res.send('successful').status(200);
	},

	// compare the password
	async comparePassword(req: Request, res: Response, next: NextFunction) {
		const id = req.body.id;
		const password = req.body.password;
		// get hash from db
		const hash = await sqlExe('SELECT password FROM user WHERE user_id = ?', [
			id,
		]);
		// compare hash from request input
		const compare = await bcrypt.compare(password, hash[0].password);

		res.send(compare);
	},
};
