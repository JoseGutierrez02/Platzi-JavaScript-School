let person = {
  name: 'Jose',
  age: 23,
  country: 'VE',
};

// Before
console.log(person.name, person.age);

// ES6
let { name, age } = person;
console.log(name, age);
