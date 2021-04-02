const names = [
  { name: 'Jose', age: 23 },
  { name: 'Selena', age: 34 },
];

// Before
let listOfNames = names.map(function(item) {
  console.log(item.name);
})

// ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  // code...
};

const listOfNames4 = name => {
  // code...
};

const square = num => num * num;
square(4, 4);
