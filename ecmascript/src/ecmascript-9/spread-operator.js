// ES9
const obj = {
  name: 'Jose',
  age: 23,
  country: 'VE',
};

let { country, ...all } = obj;
console.log(all);

const obj2 = {
  name: 'Selena',
  age: 24,
};

const obj3 = {
  ...obj2,
  country: 'VE'
};

console.log(obj3);
