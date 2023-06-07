import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { DecodedToken } from '../types/types';

export function validateRequest(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ error: 'No token provided' });
	}
	// Verify the token
	jwt.verify(token, process.env.SECRETKEY!, (err, decoded: any) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}

		if (!decoded || decoded.permission !== 'user') {
			return res.status(403).json({ error: 'Permission denied' });
		}

		// User has the required permission, allow access to the protected route
		next();
	});
}
