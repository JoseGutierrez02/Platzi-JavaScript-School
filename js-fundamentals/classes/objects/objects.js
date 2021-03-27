var jose = {
  firstName: 'Jose',
  lastName: 'Gutierrez',
  age: 23,
};

var selena = {
  firstName: 'Selena',
  lastName: 'Quintero',
  age: 24,
}

function printNameInUpperCase({ firstName }) {
  console.log(firstName.toUpperCase());
}

printNameInUpperCase(jose);
printNameInUpperCase(selena);