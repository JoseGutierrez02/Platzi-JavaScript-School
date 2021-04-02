// ES10
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));
