var jose = {
  name: 'Jose',
  lastName: 'Gutierrez',
  age: 23,
};

var juan = {
  name: 'Juan',
  lastName: 'Gomez',
  age: 13,
};

const ADULT_AGE = 18;

const isAdult = ({ age }) => age >= ADULT_AGE;
const isNotAdult = person => !isAdult(person);

function printIfAdult(person) {
  if (isAdult(person)) {
    console.log(`${person.name} is an adult`);
  } else {
    console.log(`${person.name} is not a adult`);
  }
}

const allowAccess = (person) => {
  (isNotAdult(person))
    ? console.log('Access denied')
    : console.log('Access granted');
}