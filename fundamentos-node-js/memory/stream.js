const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function(chunk) {
//   data += chunk;
// });

// readableStream.on('end', function() {
//   console.log(data);
// });

const Transform = stream.Transform;

function Upper() {
  Transform.call(this);
}
util.inherits(Upper, Transform);

Upper.prototype._transform = function(chunk, encoding, cb) {
  chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  cb();
}

let upper = new Upper();

readableStream.pipe(upper).pipe(process.stdout)
