// Before
function newFunction(name, age, country) {
  var name = name || 'Jose';
  var age = age || 23;
  var country = country || 'VEN';
  console.log(name, age, country);
}

// ES6
function newFunction2(name = 'jose', age = 23, country = 'VEN') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Selena', 24, 'VEN');