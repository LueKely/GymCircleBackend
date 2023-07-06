import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import crypto from 'crypto';
import { Transaction } from '../types/types';
import sort from '../utils/sort';

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

		console.log(getCurrentDate());

		const infoToArray = Object.values(transactionInfo);
		const query: string =
			'INSERT INTO transaction_history VALUES(?,?,?,?,?,?,?)';
		const data = await sqlExe(query, [...infoToArray]);

		res.send(transactionInfo.id);
	},

	// update
	async updateInfo(req: Request, res: Response, next: NextFunction) {
		const userId = req.body.payload;

		const data = await sqlExe(
			'UPDATE user SET email = ?, name = ?, age = ?, address = ? WHERE user_id = ?;',
			[req.body.email, req.body.name, req.body.age, req.body.address, userId]
		);
		res.send('info updated').status(200);
	},

	async getTransactions(req: Request, res: Response) {
		const userId = req.body.payload;
		const query: string =
			'SELECT id,name,type,price,date,status FROM transaction_history WHERE buyer_id=?';
		const data = await sqlExe(query, [userId]);

		res.send(data);
	},

	async filterTransactions(req: Request, res: Response) {
		const userId = req.body.payload;
		const query: string =
			'SELECT id,date,name FROM transaction_history WHERE buyer_id = ? AND status = "paid" AND type = "subscription" ORDER BY date DESC';
		const data = await sqlExe(query, [userId]);
		res.send(data[0]);
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
		const query = 'SELECT * FROM bulletinboard ORDER BY id DESC';

		const data = await sqlExe(query);
		res.send(data);
	},
};
