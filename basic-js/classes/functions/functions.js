// Declarative
function myFunction() {
  return 3;
}

myFunction();

// Expression
var myFunction = function(a, b) {
  return a + b;
}

myFunction(2, 2);

// Declarative function example using console log to return
function greetStudent(student) {
  console.log(`Hello ${student}`);
}

greetStudent("Jose"); // Returns "Hello Jose"

// Declarative function example using return
function addition(a, b) {
  var result = a + b;
  return result;
}

addition(10, 5); // Returns 15