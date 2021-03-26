var fruits = ["Apple", "Banana", "Cherry", "Strawberry"];

// Print array
console.log(fruits);

// Print array length
console.log(fruits.length);

// Print an specific element of an array - array[positionIndex]
console.log(fruits[2]); // Cherry

// Push an element at the end of the array
fruits.push("Pear");
console.log(fruits);

// Pop out the last element of an array
fruits.pop();
console.log(fruits);

// Push an element at the start of the array
fruits.unshift("Blackberry");
console.log(fruits);

// Pop out the first element of an array
fruits.shift();
console.log(fruits);

// Print the array element index
var cherryPosition = fruits.indexOf("Cherry");
console.log(cherryPosition);