// ES6
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  add(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 2));
