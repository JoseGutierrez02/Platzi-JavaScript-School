const { Readable } = require('stream');
const readableStreamm = new Readable();

readableStreamm.push(`${0/0} `.repeat(10).concat('Batmaan!'));
readableStreamm.push(null);

readableStreamm.pipe(process.stdout);
