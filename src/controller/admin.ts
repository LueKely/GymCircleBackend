import { sqlExe } from '../config/db';
import bcrypt from 'bcrypt';
import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default {
	async validatePhrase(req: Request, res: Response, next: NextFunction) {
		const phraseInput = req.body.phrase;
		//  get data
		const query = 'SELECT phrase FROM secret_phrase WHERE phrase_id = 0 ';
		const data = await sqlExe(query);
		const key = process.env.SECRETKEY;
		const payload = { permission: 'admin' };

		if (!key) {
			throw new Error('No environment key detected');
		}

		const compare = await bcrypt.compare(phraseInput, data[0].phrase);

		if (!compare) {
			return res.status(400).send('error bro');
		}

		const token = jwt.sign(payload, key, { expiresIn: '3d' });

		res.send(token);
	},
	async changePhrase(req: Request, res: Response, next: NextFunction) {
		const phraseInput = req.body.phrase;

		const query = 'UPDATE secret_phrase SET phrase = ? WHERE phrase_id = 0';
		const genSalt = await bcrypt.hash(phraseInput, 10).then(function (hash) {
			return hash;
		});

		sqlExe(query, [genSalt]);

		res.status(200).send('SUCCESS');
	},
	async registerAdmin(req: Request, res: Response, next: NextFunction) {},
};
