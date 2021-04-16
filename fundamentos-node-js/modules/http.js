const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
  console.log('New request!');
  console.log(req.url);

  switch(req.url) {
    case '/hello':
      res.write('Hello, what\'s up');
      res.end();
      break;
    case '/':
      res.write('Hello, welcome to my server :D');
      res.end();
      break;
    default: 
      res.write('Error 404: I do not know what are you looking for');
      res.end()
  }
}

console.log('Listening at port 3000');
