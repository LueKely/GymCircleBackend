import express, { NextFunction, Request, Response } from 'express';
import login from '../controller/login';
import { middleman } from '../middleware/middleman';
const loginRouter = express.Router();

// middleware that is specific to this LogInrouter
loginRouter.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// define the home page route
loginRouter.get('/', middleman(login.register));
loginRouter.get('/compare', middleman(login.comparePassword));
export default loginRouter;
