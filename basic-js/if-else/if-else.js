var age = 17;

if(age === 18) {
  console.log("Hey you can vote, is your first voting");
} else if(age > 18) {
  console.log("Hey you can vote again");
} else {
  console.log("You can't vote yet kiddo");
}

// Ternary operator - a one line if-else
// condition ? true : false
var number = 2;
var result = number === 1 ? "Yes I am 1" : "No I am not 1"
console.log(result);