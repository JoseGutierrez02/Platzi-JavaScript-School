process.on('beforeExit', () => {
  console.log('The process is about to end');
});

process.on('exit', () => {
  console.log('The process has ended');
});

process.on('uncaughtException', (err, origin) => {
  console.error('Damn, We forgot to catch an error');
  console.error(err.message);
  console.log(origin)
});

noExist();