function inheritsFrom(childPrototype, parentPrototype) {
  var fn = function () {}
  fn.prototype = parentPrototype.prototype;
  childPrototype.prototype = new fn
  childPrototype.prototype.constructor = childPrototype;
}

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

function Developer(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

inheritsFrom(Developer, Person);

Developer.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} ${this.lastName} and i am a developer`);
}

var jose = new Developer("Jose", "Gutierrez", 1.75);
var selena = new Person("Selena", "Quintero", 1.70);
var john = new Developer("John", "Wick", 1.82);
