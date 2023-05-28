import { NextFunction, Request, Response } from 'express';
import connection from '../config/db';

export default {
	// get info
	async getUserInfo(req: Request, res: Response, next: NextFunction) {
		await connection.query(
			`SELECT * FROM tbl_user WHERE user_id = ${req.params.id};`,
			(error, results) => {
				if (error) {
					console.error('Error executing query:', error);
					res.status(500).json({ error: 'Internal Server Error' });
				} else {
					res.json(results);
				}
			}
		);
	},
	// post transaqtion
};
