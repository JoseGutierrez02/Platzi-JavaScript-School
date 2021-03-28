function Person(name, lastName, height) {
  this.name = name;
  this.lastName = lastName;
  this.height = height;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} ${this.lastName}`);
};

Person.prototype.isTall = function () {
  return this.height > 1.8;
};

var jose = new Person("Jose", "Gutierrez", 1.75);
var selena = new Person("Selena", "Quintero", 1.70);
var john = new Person("John", "Wick", 1.81);
