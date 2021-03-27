var x = 4, y = "4";

console.log(`Is x equal to y? ${x == y}`);
console.log(`Is x strictly equal to y? ${x === y}`);

var jose = {
  name: 'Jose'
};

var jose2 = {
  ...jose
};

console.log(`Is jose1 equal jose2? ${jose === jose2}`);