import http from 'http';
import fs from 'fs';

   
       const server = http.createServer((req, res) => {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    });

        server.listen(8080, () => {
    console.log("Tu servidor está listo en el puerto 8080");
    });