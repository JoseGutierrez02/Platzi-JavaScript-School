let i = 0;
let interval = setInterval(function () {
  console.log(i);
  if(i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

// SetImmediate - method that receives a function and execute it immediately
setImmediate(function () {
  console.log('Hello');
});

console.log(__dirname); // directory name
console.log(__filename); // directory + filename