import express, { NextFunction, Request, Response } from 'express';
import login from '../controller/login';

import limitRate from '../middleware/ratelimit';

import { middleman } from '../middleware/middleman';
import { validateEmail } from '../utils/validation';

const loginRouter = express.Router();

// middleware that is specific to this LogInrouter
loginRouter.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// register
loginRouter.put('/register', validateEmail, middleman(login.register));
// login
loginRouter.post('/', limitRate, middleman(login.logInReq));

export default loginRouter;
