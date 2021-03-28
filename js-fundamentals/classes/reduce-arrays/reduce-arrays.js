var jose = {
  name: "Jose",
  lastName: "Gutierrez",
  height: 1.72,
  booksQuantity: 111,
};

var selena = {
  name: "Selena",
  lastName: "Quintero",
  height: 1.7,
  booksQuantity: 78,
};

var jesus = {
  name: "Jesus",
  lastName: "Bohorquez",
  height: 1.85,
  booksQuantity: 132,
};

var dario = {
  name: "Dario",
  lastName: "Juarez",
  height: 1.71,
  booksQuantity: 90,
};

var vicky = {
  name: "Vicky",
  lastName: "Zapata",
  height: 1.56,
  booksQuantity: 91,
};

var paula = {
  name: "Paula",
  lastName: "Barros",
  height: 1.58,
  booksQuantity: 182,
};

var group = [jose, selena, jesus, dario, vicky, paula];

const reducer = (acumulator, { booksQuantity }) => acumulator + booksQuantity;

var totalBooks = group.reduce(reducer, 0);

console.log(`There are ${totalBooks} books in total`);
