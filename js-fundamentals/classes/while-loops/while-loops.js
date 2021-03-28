var jose = {
  name: "Jose",
  lastName: "Gutierrez",
  age: 23,
  weight: 75,
};

console.log(`At the beginning of the year ${jose.name} weights ${jose.weight}kg`);

const WEIGHT_INCREMENT = 0.3;
const DAYS_PER_YEAR = 365;

const gainsWeight = (person) => (person.weight += WEIGHT_INCREMENT);
const losesWeight = (person) => (person.weight -= WEIGHT_INCREMENT);
const eatsALot = () => Math.random() < 0.3;
const playSports = () => Math.random() < 0.4;

const GOAL_WEIGHT = jose.weight - 3;
var days = 0;

while (jose.weight > GOAL_WEIGHT) {
  if (eatsALot()) {
    gainsWeight(jose);
  }

  if (playSports) {
    losesWeight(jose);
  }

  days++;
}

console.log(`It took ${days} days to ${jose.name} to lose 3kg`);