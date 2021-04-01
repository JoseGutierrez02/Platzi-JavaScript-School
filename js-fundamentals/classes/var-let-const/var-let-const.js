var jose = {
  name: 'Jose',
  lastName: 'Gutierrez',
  age: 23,
};

const isAdult = (person) => {
  let message;
  const IS_ADULT = 18;

  person.age >= IS_ADULT 
    ? (message = 'Is adult') 
    : (message = 'Is not adult');

  console.log(message);
};

isAdult(jose);
