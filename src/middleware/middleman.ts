import { NextFunction, Request, Response } from 'express';

const middleman = (req: Request, res: Response, next: NextFunction) => {
	console.log('i am middle man');
	next();
};

export default middleman;
