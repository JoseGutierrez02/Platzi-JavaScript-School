const fs = require('fs');

function read(route, cb) {
  fs.readFile(route, (error, data) => {
    (error)
      ? console.error('I could not read the file', error.message)
      : cb(data.toString());
  });
}

function write(route, content, cb) {
  fs.writeFile(route, content, (error) => {
    (error)
      ? console.error('I could not write the file', error.message)
      : cb('File has been written successfully');
  });
}

function erase(route, cb) {
  fs.unlink(route, (error) => {
    (error)
      ? console.error('I could not delete the file', error.message)
      : cb('File has been deleted successfully');
  });
}

write(__dirname + '/file1.txt', 'I am a new brand new file', console.log);
read(__dirname + '/file1.txt', console.log);
// erase(__dirname + '/file1.txt', console.log);