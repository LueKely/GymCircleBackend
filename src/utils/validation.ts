import { NextFunction, Request, Response } from 'express';
import { sqlExe } from '../config/db';
import jwt from 'jsonwebtoken';

// to do: refactor this hunk of junk

export async function validateRequest(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: 'No token provided' });
	}
	// Verify the token
	// to do: tanggalin ang pinagbabawal na techinique
	jwt.verify(token, process.env.SECRETKEY!, (err, decoded: any) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}
		if (!decoded || decoded.permission !== 'user') {
			return res.status(403).json({ error: 'Permission denied' });
		}
		// User has the required permission, allow access to the protected route
		req.body.payload = decoded.payload;
		next();
	});
}

export async function middlewarePhrase(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log('wtf');

	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: 'No token provided' });
	}
	// Verify the token
	// to do: tanggalin ang pinagbabawal na techinique
	jwt.verify(token, process.env.SECRETKEY!, (err, decoded: any) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}
		if (!decoded || decoded.permission !== 'admin') {
			return res.status(403).json({ error: 'Permission denied' });
		}
		// User has the required permission, allow access to the protected route
		// req.body.payload = decoded.payload;
		next();
	});
}

export async function validateAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log('i am working');

	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: 'No token provided' });
	}
	// Verify the token
	// to do: tanggalin ang pinagbabawal na techinique
	jwt.verify(token, process.env.SECRETKEY!, (err, decoded: any) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}
		if (!decoded || decoded.permission !== 'admin login') {
			return res.status(403).json({ error: 'Permission denied' });
		}
		// User has the required permission, allow access to the protected route
		// req.body.payload = decoded.payload;
		next();
	});
}

export async function validateEmail(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const emailRequest = req.body.userEmail;
	const emailQuery = 'SELECT COUNT(email) AS count FROM user WHERE email = ?';
	const emailsCount = await sqlExe(emailQuery, [emailRequest]);

	if (emailsCount[0].count > 0) {
		return res.status(409).json({ error: 'Username already taken' });
	} else {
		return next();
	}
}
