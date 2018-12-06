const http = require('http');
const PORT = process.env.port || 5000;

const headers = {
  'Content-Type': 'text/plain',
  'Content-Length': 1
};

const killHeaders = res => {
  const headers = ['Date', 'Connection', 'Transfer-Encoding'];
  headers.map(h => res.removeHeader(h));
  res.flushHeaders();
  res.maxHeadersCount = -1;
};

const content = 'k';

http.createServer((req, res) => {
  killHeaders(res);
  res.write(content, 'utf-8');
  res.end();
}).listen(PORT);
