import express, { NextFunction, Request, Response } from 'express';
import user from '../controller/user';
import { middleman } from '../middleware/middleman';
import { validateRequest } from '../utils/validation';

const userRoute = express.Router();

// middleware
userRoute.use(validateRequest);

userRoute.get('/', (req: Request, res: Response) => {
	console.log('tanginamo');
	res.send(req.body.test + ' ' + req.headers.key);
});

// get info
userRoute.get('/:id', middleman(user.getUserInfo));

// update your info
userRoute.patch('/:id', middleman(user.updateInfo));

// userRoute post request
userRoute.post('/:id/transaction', (req: Request, res: Response) => {
	res.send('transaction gaming');
});

userRoute.post(
	'/poo',
	middleman((req: Request, res: Response) => {
		console.log(req.body);
		res.send(req.headers.authorization);
	})
);

export default userRoute;
