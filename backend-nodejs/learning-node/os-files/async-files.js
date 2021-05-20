const fs = require('fs');

const file = process.argv[2];

if (!file) {
  throw new Error('Missing file name as a last parameter');
}

fs.readFile(file, (err, content) => {
  if (err) {
    return console.log(err.message);
  }

  const lines = content.toString().split('\n').length;
  console.log(lines);
});
