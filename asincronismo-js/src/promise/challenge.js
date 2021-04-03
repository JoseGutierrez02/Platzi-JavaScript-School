const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then((data) => {
    console.log(`There are ${data.info.count} characters in the Rick and Morty universe.` );
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(`The first character is ${data.name}.`);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(`He comes from ${data.dimension}.`);
  })
  .catch((err) => console.error(err));
