import express, { NextFunction, Request, Response } from 'express';
import user from '../controller/user';
import { middleman } from '../middleware/middleman';
import { validateRequest } from '../utils/validation';

const userRoute = express.Router();

// middleware
userRoute.use(validateRequest);

userRoute.get('/', (req: Request, res: Response) => {
	console.log('tanginamo');
	res.status(200);
});

// update your info
userRoute.patch('/:id', middleman(user.updateInfo));

// userRoute post request
userRoute.post('/:id/transaction', (req: Request, res: Response) => {
	res.send('transaction gaming');
});

// get user info
userRoute.post('/info', middleman(user.getInfo));

export default userRoute;
