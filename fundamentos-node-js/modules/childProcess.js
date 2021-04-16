const { exec, spawn } = require('child_process');

// exec('node modules/console.js', (err, stdout, stderr) => {
//   if(err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let newProcess = spawn('ls', ['-la']);

console.log(newProcess.pid);
console.log(newProcess.connected);

newProcess.stdout.on('data', function (data) {
  console.log(newProcess.killed);
  console.log(data.toString());
})

newProcess.on('exit', function () {
  console.log('The process has ended');
  console.log(newProcess.killed);
})


