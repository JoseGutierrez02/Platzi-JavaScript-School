class Person {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }

  greet(fn) {
    var { name, lastName } = this;
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
    if(fn) {
      fn(name, lastName, false);
    }
  }

  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName, height) {
    super(name, lastName, height)
  }

  greet(fn) {
    var { name, lastName } = this;
    console.log(`Hello, my name is ${this.name} ${this.lastName} and i am a developer`);
    if(fn) {
      fn(name, lastName, true);
    }
  }
}

function greetBack(name, lastName, isDev) {
  console.log(`Good morning ${name} ${lastName}`);
  if(isDev)
    console.log('Wow, i didn\'t know yo were dev');
}

var jose = new Developer("Jose", "Gutierrez", 1.75);
var selena = new Person("Selena", "Quintero", 1.70);
var jesus = new Developer("Jesus", "Bohorquez", 1.82);

jose.greet(greetBack);
selena.greet(greetBack);
jesus.greet(greetBack);