console.log('Something');
console.info('Something');
console.error('Error');
console.warn('Warning');

var table = [
  {
    a: 1,
    b: 'Z',
  },
  {
    a: 2,
    b: 'L',
  }
]

console.table(table);

function function1 () {
  console.group('function1 ');
  console.log('This is function 1');
  console.log('This is function 1');
  function2();
  console.log('This is function 1 again')
  console.groupEnd('function1 ');
}

function function2() {
  console.group('function 2');
  console.log('This is function 2');
  console.log('This is function 2');
  console.groupEnd('function 2');
}

console.log('Start');
function1();

console.count('times');
console.count('times');
console.count('times');
console.countReset('times');
console.count('times');