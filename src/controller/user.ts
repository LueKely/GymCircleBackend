import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';

export default {
	// get info
	async getUserInfo(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const data = await sqlExe('SELECT * FROM tbl_user WHERE user_id = ?;', id);
		res.send(data[0]).status(200);
	},

	// post transaction

	// update
	async updateInfo(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const { name, age } = req.body;
		const data = await sqlExe(
			'UPDATE tbl_user SET name = ?, age = ? WHERE user_id = ?;',
			[name, age, id]
		);
		res.send(data[0]).status(200);
	},
};
