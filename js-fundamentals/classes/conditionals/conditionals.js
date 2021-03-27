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

printProfessions(jose);