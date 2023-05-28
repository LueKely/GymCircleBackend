import express, { NextFunction, Request, Response } from 'express';

// database
import user from '../controller/user';

//middleman
import { middleman } from '../middleware/middleman';

const userRoute = express.Router();

// middleware that is specific to this userRoute
userRoute.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// define the home page route
userRoute.get('/', (req: Request, res: Response) => {
	res.send(req.body.test + ' ' + req.headers.key);
});

// define the userRoute id route
userRoute.get('/:id', middleman(user.getUserInfo));

// userRoute post request
userRoute.post('/:id/transaction', (req: Request, res: Response) => {
	res.send('posted');
});

export default userRoute;
