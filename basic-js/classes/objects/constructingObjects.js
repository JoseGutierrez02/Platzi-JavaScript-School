function car(brand, model, year) {
  this.brand = brand,
  this.model = model,
  this.year = year
}

var newCar = new car("Toyota", "Corolla", 2020);
console.log(newCar.model);

