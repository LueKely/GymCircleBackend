import express, { NextFunction, Request, Response } from 'express';
import user from '../controller/user';
import { middleman } from '../middleware/middleman';
import { validateRequest } from '../utils/validation';

const userRoute = express.Router();

// middleware
userRoute.use(validateRequest);

// update your info
userRoute.patch('/', middleman(user.updateInfo));

// userRoute post request
userRoute.put('/transaction', middleman(user.generateTransaction));

// get user info
userRoute.get('/', middleman(user.getInfo));

export default userRoute;
