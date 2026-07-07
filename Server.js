const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Hello from Node.js!, im here so r u gay!!');
})
server.listen(3000);