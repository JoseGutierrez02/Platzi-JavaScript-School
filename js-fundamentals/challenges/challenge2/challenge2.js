var jose = {
  name: 'Jose',
  lastName: 'Gutierrez',
  age: 23
}

function isAdult(person) {
  var { name, lastName, age } = person;

  if(age >= 18) {
    console.log(`${name} ${lastName} is an adult.`);
  } else {
    console.log(`${name} ${lastName} is not an adult.`);
  }
}

isAdult(jose);