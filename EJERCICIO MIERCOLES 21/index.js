import http from 'http';
import fs from "fs";
import colors from 'colors';
import dayjs from 'dayjs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(html);
        console.log(colors.green(`[${dayjs().format()}] GET /`));

     } else if (req.url === '/contact') {
        const contact = fs.readFileSync('./contact.html', 'utf-8');
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(contact);
        console.log(colors.green(`[${dayjs().format()}] GET /aboutUs`));

      } else if (req.url === '/aboutUs') {
        const about = fs.readFileSync('./aboutUs.html', 'utf-8');
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(about);
        console.log(colors.green(`[${dayjs().format()}] GET /contact`));

    } else  {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
    }
);


server.listen(3000, () => {
    console.log(colors.cyan("Servidor ejecutandose en el puerto 3000"));
});