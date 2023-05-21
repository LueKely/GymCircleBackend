import { log } from 'console';
import express, { Express, Request, Response } from 'express';

const port = 3000;

const app: Express = express();

app.use(express.json());

// middleware
app.use((req: Request, res, next) => {
	console.log(req.body);
	if (req.body.test == 'testing') {
		res.status(400).send('bobo mo');
	}

	next();
});

const test = [1, 2, 3];

function isEven(tite: number) {
	return tite + 1;
}

app.get('/logIn/:id', (req: Request, res: Response) => {
	console.log(isEven(Number(req.params.id)));

	res.send(isEven(Number(req.params.id) || 403).toString());
});

app.get('/', (req: Request, res: Response) => {
	res.send(test);
});

app.post('/', (req, res) => {
	res.send({ 'mama mo ': 'what' });
});

app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});
