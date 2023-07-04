import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import crypto from 'crypto';
import { Transaction } from '../types/types';

export default {
	// post transaction

	async generateTransaction(req: Request, res: Response) {
		const userId = req.body.payload;

		function getCurrentDate() {
			const today = new Date();
			const year = today.getFullYear();
			const month = String(today.getMonth() + 1).padStart(2, '0');
			const day = String(today.getDate()).padStart(2, '0');
			return `${year}-${month}-${day}`;
		}

		const transactionInfo: Transaction = {
			id: crypto.randomUUID(),
			transactionName: req.body.name,
			type: req.body.type,
			buyerId: userId,
			price: req.body.price,
			date: getCurrentDate(),
			status: 'not paid',
		};

		const infoToArray = Object.values(transactionInfo);
		const query: string =
			'INSERT INTO transaction_history VALUES(?,?,?,?,?,?,?)';
		const data = await sqlExe(query, [...infoToArray]);

		res.send(transactionInfo.id);
	},

	// update
	async updateInfo(req: Request, res: Response, next: NextFunction) {
		const userId = req.body.payload;
		const { name, age, address } = req.body;
		console.log(userId);

		const data = await sqlExe(
			'UPDATE user SET name = ?, age = ?, address = ? WHERE user_id = ?;',
			[name, age, address, userId]
		);
		res.send('info updated').status(200);
	},

	// get user info
	async getInfo(req: Request, res: Response, next: NextFunction) {
		const userId = req.body.payload;
		const data = await sqlExe(
			'SELECT user.user_id,user.points,user.name,user.email,user.age,user.address,user.tier,attendance.* FROM user JOIN attendance ON user.user_id = attendance.user_id WHERE user.user_id=?',
			[userId]
		);
		res.send(data[0]).status(200);
	},
	async getAnnouncements(req: Request, res: Response, next: NextFunction) {
		const query = 'SELECT * FROM bulletinboard';

		const data = await sqlExe(query);
		res.send(data);
	},
};
