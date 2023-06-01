import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import bcrypt from 'bcrypt';

export default {
	// put info
	async register(req: Request, res: Response, next: NextFunction) {
		const genSalt = await bcrypt
			.hash(req.body.password, 10)
			.then(function (hash) {
				return hash;
			});
		// dapat ipupush to alright sa db?
		res.send(genSalt);
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
