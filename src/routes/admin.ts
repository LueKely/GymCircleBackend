import express, { NextFunction, Request, Response } from 'express';
import adminController from '../controller/admin';
import { middlewarePhrase } from '../utils/validation';
import { middleman } from '../middleware/middleman';
const admin = express.Router();

// define the home page route
admin.get('/phrase', middleman(adminController.validatePhrase));
admin.patch(
	'/phrase',
	middlewarePhrase,
	middleman(adminController.changePhrase)
);
// define the user id route
admin.get('/:id', (req: Request, res: Response) => {
	res.send(`Hello Admin no. ${req.params.id}`);
});

export default admin;
