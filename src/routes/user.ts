import express, { NextFunction, Request, Response } from 'express';
import user from '../controller/user';
import { middleman } from '../middleware/middleman';

const userRoute = express.Router();

// middleware
userRoute.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

userRoute.get('/', (req: Request, res: Response) => {
	console.log();
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

export default userRoute;
