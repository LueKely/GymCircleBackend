// database

import express, { NextFunction, Request, Response } from 'express';
import connection from '../config/db';

const user = express.Router();

// middleware that is specific to this user
user.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// define the home page route
user.get('/', (req: Request, res: Response) => {
	res.send('this is the user');
});

// define the user id route
user.get('/:id', (req: Request, res: Response) => {
	connection.query(
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
});
// user post request
user.post('/:id/transaqtion', (req: Request, res: Response) => {
	res.send('posted');
});
export default user;
