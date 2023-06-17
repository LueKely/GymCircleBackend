import express, { NextFunction, Request, Response } from 'express';
import adminController from '../controller/admin';
import { middlewarePhrase } from '../utils/validation';
import { validateAdmin } from '../utils/validation';
import { middleman } from '../middleware/middleman';
import { validateEmailAdmin } from '../utils/validation';
const admin = express.Router();

// enter phrase to get token
admin.get('/phrase', middleman(adminController.validatePhrase));
// change phrase
admin.patch('/phrase', validateAdmin, middleman(adminController.changePhrase));
// log in
admin.post('/', middlewarePhrase, middleman(adminController.loginAdmin));
// register
admin.put(
	'/',
	[middlewarePhrase, validateEmailAdmin],
	middleman(adminController.registerAdmin)
);
// get users
admin.get('/users', validateAdmin, middleman(adminController.getAllUsers));
// update user
admin.patch('/users', validateAdmin, middleman(adminController.updateUser));
// delete user
admin.delete(
	'/users/:id',
	validateAdmin,
	middleman(adminController.deleteUser)
);
// get all attendance
admin.get(
	'/transaction',
	validateAdmin,
	middleman(adminController.getAllTransactions)
);
// update transaction
admin.patch('/transaction/:id', middleman(adminController.updateTransaction));
export default admin;
