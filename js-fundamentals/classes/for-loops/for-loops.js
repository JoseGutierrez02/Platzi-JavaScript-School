var jose = {
  name: "Jose",
  lastName: "Gutierrez",
  age: 23,
  weight: 75,
}

console.log(`At the beginning of the year ${jose.name} weights ${jose.weight}kg`)

const WEIGHT_INCREMENT = 0.2
const DAYS_PER_YEAR = 365

const gainsWeight = person => person.weight += WEIGHT_INCREMENT
const losesWeight = person => person.weight -= WEIGHT_INCREMENT

for (var i = 1; i <= DAYS_PER_YEAR; i++) {
  var random = Math.random();

  if(random < 0.25) {
    gainsWeight(jose)
  } else if(random < 0.5) {
    losesWeight(jose)
  }
}

console.log(`At the end of the year ${jose.name} weights ${jose.weight.toFixed(2)}kg`)
