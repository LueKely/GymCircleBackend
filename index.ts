import express, { Express, Request, Response } from 'express';
import middleman from './middleware/middleman';
import user from './routes/user';
import admin from './routes/admin';
import guest from './routes/guest';
const port = 3000;

const app: Express = express();

app.use(express.json());

app.use(middleman);
app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
	res.send('hello');
});

app.use('/user', user);
app.use('/admin', admin);
app.use('/guest', guest);
