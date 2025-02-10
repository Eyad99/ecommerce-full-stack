import createServer from 'http';
import parse from 'url';
import next from 'next';

const prod = true;
const port = prod ? process.env.PORT || 3000 : 3000;

const app = next({ dev: !prod });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url, true);
			const { pathname } = parsedUrl;
			handle(req, res, parsedUrl);
			console.log('pathname:', pathname);
		}).listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
