import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import crypto from 'crypto';
import { Transaction } from '../types/types';
export default {
	// post transaction

	async generateTransaction(req: Request, res: Response) {
		const userId = req.body.payload;

		const transactionInfo: Transaction = {
			id: crypto.randomUUID(),
			transactionName: req.body.name,
			type: req.body.type,
			buyerId: userId,
			status: 'not paid',
			date: new Date().toLocaleDateString('en-US'),
		};

		const infoToArray = Object.values(transactionInfo);
		const query: string = 'INSERT INTO transaction_history VALUES(?,?,?,?,?,?)';
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
			'SELECT name, email, age, address,tier,points FROM user WHERE user_id = ?;',
			[userId]
		);
		res.send(data[0]).status(200);
	},
};
