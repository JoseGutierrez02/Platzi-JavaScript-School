var articles = [
  { name: "Bike", price: 3000 },
  { name: "Tv", price: 2500 },
  { name: "Book", price: 320 },
  { name: "Cellphone", price: 10000 },
  { name: "Laptop", price: 20000 },
  { name: "Keyboard", price: 500 },
  { name: "Headphones", price: 1700 },
];

var filteredArticles = articles.filter(function(article) {
  return article.price <= 500;
});

console.log(filteredArticles);

var articlesNames = articles.map(function(article) {
  return article.name;
});

console.log(articlesNames);

var findLaptop = articles.find(function(article) {
  return article.name === "Laptop";
})

console.log(findLaptop);

articles.forEach(function(article) {
  console.log(article.name);
});

var cheapArticles = articles.some(function(article) {
  return article.price <= 700;
});

console.log(cheapArticles);