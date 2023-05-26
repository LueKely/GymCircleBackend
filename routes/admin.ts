import express, { NextFunction, Request, Response } from 'express';

const admin = express.Router();

// middleware that is specific to this admin
admin.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// define the home page route
admin.get('/', (req: Request, res: Response) => {
	res.send('this is the admin');
});

// define the user id route
admin.get('/:id', (req: Request, res: Response) => {
	res.send(`Hello Admin no. ${req.params.id}`);
});

export default admin;
