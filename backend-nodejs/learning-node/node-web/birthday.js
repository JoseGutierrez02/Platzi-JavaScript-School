/*
  This is a program that receives your birthay
  and tells you wich day of the week you were born
*/
const http = require('http');
const server = http.createServer();

const getWeekDay = (body) => {
  // Days of the week array
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];

  const result = body.split('-');
  const day = result[0];
  const month = result[1];
  const year = result[2];

  // Getting date and week day using Date()
  const birthay = new Date(`${month}-${day}-${year}`);
  const weekDay = days[birthay.getDay()];
  return weekDay;
};

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
        const weekDay = getWeekDay(body);

        res.end(`You were born on a ${weekDay}`);
      });
  } else {
    res.statusCode = 404;
    res.end(body);
  }
});

server.listen(8000, () => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});
