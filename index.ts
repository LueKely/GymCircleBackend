// express
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// middleman
import { errorHandler } from './src/middleware/middleman';
import { notFoundHandler } from './src/middleware/middleman';
// routes
import userRoute from './src/routes/user';
import admin from './src/routes/admin';
import loginRouter from './src/routes/login';
// database
import pool from './src/config/db';
// env
import * as dotenv from 'dotenv';
dotenv.config();

const port = 3030;
const app: Express = express();

// db from the  database
pool.getConnection((error, connection) => {
	if (error) {
		console.error('Unable to connect to the database:', error);
	} else {
		console.log('Database connection established.');
	}
	connection.release();
});

// init the middleware
app.use(cors());
app.use(errorHandler);
app.use(express.json());

// app.use(notFoundHandler);

app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});
app.get('/test', (req: Request, res: Response) => {
	res.send('GET TEST');
});
app.post('/test', (req: Request, res: Response) => {
	res.send('POST TEST');
});
app.patch('/test', (req: Request, res: Response) => {
	res.send('PATCH TEST');
});
app.put('/test', (req: Request, res: Response) => {
	res.send('PUT TEST');
});
app.delete('/test', (req: Request, res: Response) => {
	res.send('DELETE TEST');
});

app.use('/user', userRoute);
app.use('/admin', admin);
app.use('/login', loginRouter);
