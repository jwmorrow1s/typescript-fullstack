import server from 'express';
import { readFile } from 'fs/promises';
import path from 'path';

const app = server();
const port = process.env.SERVER_PORT || 8080;

app.get('/', async (_, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(
        await readFile(
            path.join(__dirname, '../static/index.html')
        )
    );
});

app.get('/dist/bundle.js', async (_, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(
        await readFile(
            path.join(__dirname, '../dist/bundle.js')
        )
    );
});


app.listen(port, () => console.log(`listening on port ${port}...`));
