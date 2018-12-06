const http = require('http');
const PORT = process.env.port || 5000;

const headers = {
  'Content-Type': 'text/plain',
  'Content-Length': 1
};


const content = 'k';

http.createServer((req, res) => {
  res.writeHead(200, headers);
  res.end(content, 'utf-8');
}).listen(PORT);
