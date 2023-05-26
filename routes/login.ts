import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
	next();
});

// define the home page route
router.get('/', (req: Request, res: Response) => {
	res.send('login page');
});

module.exports = router;
