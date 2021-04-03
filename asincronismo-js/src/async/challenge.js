const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const getInfo = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(`There are ${data.info.count} characters in the Rick and Morty universe.`);
    console.log(`The first character is ${character.name}.`);
    console.log(`He comes from ${origin.dimension}.`);
  } catch(error) {
    console.error(error);
  }
}

getInfo(API);
