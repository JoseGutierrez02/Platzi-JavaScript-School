var jose = {
  name: "Jose",
  lastName: "Gutierrez",
  height: 1.72,
};

var selena = {
  name: "Selena",
  lastName: "Quintero",
  height: 1.7,
};

var jesus = {
  name: "Jesus",
  lastName: "Bohorquez",
  height: 1.85,
};

var dario = {
  name: "Dario",
  lastName: "Juarez",
  height: 1.71,
};

var vicky = {
  name: "Vicky",
  lastName: "Zapata",
  height: 1.56,
};

var paula = {
  name: "Paula",
  lastName: "Barros",
  height: 1.58,
};

const isTall = ({ height }) => height > 1.8;
const isShort = (person) => !isTall(person);

var group = [jose, selena, jesus, dario, vicky, paula];

for (var i = 0; i < group.length; i++) {
  var person = group[i];
  console.log(`${person.name} is ${person.height}mts tall`);
}

var tallPeople = group.filter(isTall);
var shortPeople = group.filter(isShort);
console.log(tallPeople);
console.log(shortPeople);