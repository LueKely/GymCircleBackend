import express, { NextFunction, Request, Response } from 'express';
import user from '../controller/user';
import limitRate from '../middleware/ratelimit';

import { middleman } from '../middleware/middleman';
import { validateRequest } from '../utils/validation';

const userRoute = express.Router();

// middleware
userRoute.use(validateRequest);

// update your info
userRoute.patch('/', limitRate, middleman(user.updateInfo));

// userRoute post request
userRoute.put('/transaction', limitRate, middleman(user.generateTransaction));

// get user info
userRoute.get('/', middleman(user.getInfo));

userRoute.get('/announcements', limitRate, middleman(user.getAnnouncements));
export default userRoute;
