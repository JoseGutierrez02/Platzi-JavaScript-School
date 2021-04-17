console.time('all');
let sum = 0;
console.time('loop');

for (let i = 0; i < 10000000; i++) {
  sum += 1;
}
console.timeEnd('loop');

let sum2 = 0;
console.time('loop 2');

for (let j = 0; j < 10000000; j++) {
  sum2 += 1;
}
console.timeEnd('loop 2');

console.log('Start of async process');
console.time('async');
asyncFunction()
  .then(() => {
    console.timeEnd('async');
  });

console.timeEnd('all');

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('End of async process');
      resolve(); 
    })
  })
}
