const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

function getCharacter(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  const opts = { crossDomain: true };
  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Error, couldn't get character ${id}`);
    });
}

getCharacter(1, (character) => {
  console.log(`Hello, I'm ${character.name}`);

  getCharacter(2, (character) => {
    console.log(`Hello, I'm ${character.name}`);

    getCharacter(3, (character) => {
      console.log(`Hello, I'm ${character.name}`);

      getCharacter(4, (character) => {
        console.log(`Hello, I'm ${character.name}`);

        getCharacter(5, (character) => {
          console.log(`Hello, I'm ${character.name}`);

          getCharacter(6, (character) => {
            console.log(`Hello, I'm ${character.name}`);

            getCharacter(7, (character) => {
              console.log(`Hello, I'm ${character.name}`);
            });
          });
        });
      });
    });
  });
});
