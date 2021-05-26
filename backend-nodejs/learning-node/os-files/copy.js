const fs = require('fs');

fs.copyFile('naranja.txt', 'limon.txt', (err) => {
  if (err) {
    console.error(err);
  }

  console.log('naranja.txt fue copiado como limon.txt');
});
