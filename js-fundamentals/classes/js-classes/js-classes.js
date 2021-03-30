class Person {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
  }

  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName, height) {
    super(name, lastName, height);
  }

  greet() {
    console.log(`Hello, my name is ${this.name} ${this.lastName} and i am a developer`);
  }
}

var jose = new Developer("Jose", "Gutierrez", 1.75);
var selena = new Person("Selena", "Quintero", 1.70);
var jesus = new Developer("Jesus", "Bohorquez", 1.82);
