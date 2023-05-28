// express
import express, { Express, Request, Response } from 'express';
// middleman
import { errorHandler } from './src/middleware/middleman';
import { notFoundHandler } from './src/middleware/middleman';

// routes
import userRoute from './src/routes/user';
import admin from './src/routes/admin';
import guest from './src/routes/guest';
// database
import db from './src/config/db';

const port = 3000;

const app: Express = express();

// db from the  database
db.connect((error) => {
	if (error) {
		console.error('Unable to connect to the database:', error);
	} else {
		console.log('Database connection established.');
	}
});

app.use(express.json());

// init the middleware
app.use(errorHandler);
// app.use(notFoundHandler);

app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
	res.send('hello');
});

app.use('/user', userRoute);
app.use('/admin', admin);
app.use('/guest', guest);
