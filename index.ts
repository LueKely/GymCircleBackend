import express, { Express, Request, Response } from 'express';
import user from './routes/user';
import admin from './routes/admin';
import guest from './routes/guest';
const port = 3000;

const app: Express = express();

app.use(express.json());

app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});

app.use('/user', user);
app.use('/admin', admin);
app.use('/guest', guest);
