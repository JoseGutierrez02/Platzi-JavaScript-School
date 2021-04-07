export {};
/* Basic variable types */

// Boolean
let muted: boolean = true;
muted = false;

// Number
let numerator: number = 42;
let denominator: number = 6;
let result = numerator / denominator;

// String
let name: string = 'Jose';
let greet = `My name is ${name}`;

// Arrays
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('John');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Richard');
peopleAndNumbers.push(9000);

// Enum
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  Yellow = 'Yellow',
}

let favoriteColor: Color = Color.Blue;
console.log(`My favorite color is ${favoriteColor}`);

// Any
let wildcard: any = 'Joker';
wildcard = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

// Functions
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const jose = fullName('Agent');
console.log(jose);
