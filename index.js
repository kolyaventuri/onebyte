const http = require('http');

const headers = {
  'Content-Type': 'text/plain',
  'Content-Length': 1
};


const content = 'k';

http.createServer((req, res) => {
  res.writeHead(200, headers);
  res.end(content, 'utf-8');
}).listen(3000);
