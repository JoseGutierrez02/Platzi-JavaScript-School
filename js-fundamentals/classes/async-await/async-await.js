const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

const getCharacter = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    const opts = { crossDomain: true };

    $.get(url, opts, (data) => {
      resolve(data);
    }).fail(() => reject(id));
  });
};

const onError = (id) => console.log(`Error, couldn't get character ${id}`);

const getCharacters = async () => {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8];
  var promises = ids.map((id) => getCharacter(id));

  try {
    var characters = await Promise.all(promises);

    characters.forEach((character) => {
      console.log(`Hello, my name is: ${character.name}`);
    });
  } catch (id) {
    onError(id);
  }
};

getCharacters();
