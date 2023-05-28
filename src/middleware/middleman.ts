import { NextFunction, Request, Response } from 'express';

// const middleman = (req: Request, res: Response, next: NextFunction) => {
// 	console.log('i am middle man');
// 	next();
// };

// export default middleman;

export function middleman(handler: Function) {
	return async function (req: Request, res: Response, next: NextFunction) {
		try {
			await handler(req, res, next);
		} catch (error) {
			next(error);
		}
	};
}

export const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = err.status || 400;

	res.status(status).send(err.message);
};

export const notFoundHandler = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(404).send('Route not found');
};
