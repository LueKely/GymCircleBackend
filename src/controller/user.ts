import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';

export default {
	// get info
	async getUserInfo(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const data = await sqlExe('SELECT * FROM user WHERE user_id = ?;', id);
		res.send(data[0]).status(200);
	},

	// post transaction

	// update
	async updateInfo(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id;
		const { name, age } = req.body;
		const data = await sqlExe(
			'UPDATE user SET name = ?, age = ? WHERE user_id = ?;',
			[name, age, id]
		);
		res.send(data[0]).status(200);
	},

	// get user info
	async getInfo(req: Request, res: Response, next: NextFunction) {
		const userId = req.body.payload;
		const data = await sqlExe(
			'SELECT name, email, age, address,tier,points FROM user WHERE user_id = ?;',
			[userId]
		);
		res.send(data[0]).status(200);
	},
};
