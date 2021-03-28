var counter = 0;

const rains = () => Math.random() < 0.25;

do {
  counter++;
} while(!rains());

(counter === 1) 
  ? console.log(`I went to check if it was raining just once`)
  : console.log(`I went to check if it was raining ${counter} times`);
