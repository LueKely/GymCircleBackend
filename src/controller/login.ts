import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import bcrypt from 'bcrypt';
import { LogIn } from '../types/types';
export default {
	// put register user
	async register(req: Request, res: Response, next: NextFunction) {
		const user: LogIn = req.body;

		// encrypt password
		const genSalt = await bcrypt.hash(user.password, 10).then(function (hash) {
			return hash;
		});
		// note di ko inaad ung user_id
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

	// log in
	async comparePassword(req: Request, res: Response, next: NextFunction) {
		const compare = await bcrypt.compare(
			req.body.password,
			'$2b$10$P1MD1aEyhkt3wpan4ZE7Yun6GTDg1EhCoRsj.SA6iCVYNAdiXmvLS'
		);

		res.send(compare);
	},
};
