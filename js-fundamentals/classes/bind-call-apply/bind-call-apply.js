const jose = {
  name: 'Jose',
  lastName: 'Gutierrez',
};

const selena = {
  name: 'Selena',
  lastName: 'Quintero',
};

function greet (greet = 'Hello') {
  console.log(`${greet}, my name is ${this.name}`);
};

const greetJose = greet.bind(jose, 'Hello bro');
const greetSelena = greet.bind(selena, 'Hello sis');
greetJose();
greetSelena();

greet.call(jose, 'Hello sir');
greet.apply(jose, ['Hello fellas']);
