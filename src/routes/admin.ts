import express, { NextFunction, Request, Response } from 'express';
import adminController from '../controller/admin';
import { middlewarePhrase } from '../utils/validation';
import { middleman } from '../middleware/middleman';
import { validateEmailAdmin } from '../utils/validation';
const admin = express.Router();

// enter phrase to get token
admin.get('/phrase', middleman(adminController.validatePhrase));
// change phrase
admin.patch(
	'/phrase',
	middlewarePhrase,
	middleman(adminController.changePhrase)
);
// log in
admin.post('/', middlewarePhrase, middleman(adminController.loginAdmin));
// register
admin.put(
	'/',
	[middlewarePhrase, validateEmailAdmin],
	middleman(adminController.registerAdmin)
);

export default admin;
