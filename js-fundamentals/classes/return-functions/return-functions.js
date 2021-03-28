var jose = {
  name: 'Jose',
  lastName: 'Gutierrez',
  age: 23,
  engineer: false,
  chef: false,
  singer: true,
  dj: false,
  guitarPlayer: true,
  dronePilot: false,
};

function printProfessions(person) {
  console.log(`${person.name} ${person.lastName}:`);

  if(person.engineer) {
    console.log('Engineer');
  } else {
    console.log('Is not Engineer');
  }

  if(person.chef) {
    console.log('Chef');
  }

  if(person.dj) {
    console.log('DJ');
  }

  if(person.singer) {
    console.log('Singer');
  }

  if(person.guitarPlayer) {
    console.log('Guitar Player');
  }

  if(person.dronePilot) {
    console.log('Drone Pilot');
  }
  
}

var juan = {
  name: 'Juan',
  lastName: 'Gomez',
  age: 13,
}

const ADULT_AGE = 18;

function isAdult(person) {
  return person.age >= ADULT_AGE;
};

function printIfAdult(person) {
  if (isAdult(person)) {
    console.log(`${person.name} is an adult`);
  } else {
    console.log(`${person.name} is not a adult`);
  }
}