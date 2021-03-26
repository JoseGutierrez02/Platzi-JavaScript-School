// Build a program that builds an array of 30 cars using one object model

function car(brand, model, year) {
  this.brand = brand,
  this.model = model,
  this.year = year
}

var cars = [];

for(var i = 0; i < 30; i++) {
  var brand = prompt(`Insert brand of car #${i + 1}`);
  var model = prompt(`Insert model of car #${i + 1}`);
  var year = prompt(`Insert year of car #${i + 1}`);
  cars.push(new car(brand, model, year));
}

for(var i = 0; i < cars.length; i++) {
  console.log(`${cars[i].brand} ${cars[i].model} from ${cars[i].year}`);
}