const { Readable } = require('stream');
const readableStreamm = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }

      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  }
});

readableStreamm.currentCharCode = 65;
readableStreamm.pipe(process.stdout);
