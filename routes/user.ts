import express, { NextFunction, Request, Response } from 'express';
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
	res.send(`Hello user no. ${req.params.id}`);
});

//defines user info
user.get('/:id/info', (req: Request, res: Response) => {
	console.log(req.body);

	res.send(`Hello user no. ${req.params.id}`);
});

export default user;
