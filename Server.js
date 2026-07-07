// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     res.end('Hello from Node.js!, im here so r u gay!!');
// })
// server.listen(3000);

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('Index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});