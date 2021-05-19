/*
  This is a program that receives your birthay
  and tells you wich day of the week you were born
*/
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/test') {
    let body = [];

    req
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        body = Buffer.concat(body).toString();
        res.end(body);
      });
  } else {
    res.statusCode = 404;
    res.end(body);
  }
});

server.listen(8000, () => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});
