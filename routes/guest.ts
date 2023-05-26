import express, { NextFunction, Request, Response } from 'express';

const guest = express.Router();

// middleware that is specific to this guest
guest.use((req: Request, res: Response, next: NextFunction) => {
	console.log('Time: ', Date.now());
	next();
});

// define the home page route
guest.get('/', (req: Request, res: Response) => {
	res.send('this is the guest');
});

// define the user id route
guest.get('/:id', (req: Request, res: Response) => {
	res.send(`Hello Admin no. ${req.params.id}`);
});

export default guest;
