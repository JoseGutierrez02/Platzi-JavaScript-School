const createGreet = (phraseFinal) => {
  return (name) => {
    console.log(`Hola ${name} ${phraseFinal}`);
  };
};

const argentinianGreet = createGreet('che');
const mexicanGreet = createGreet('wey');
const colombianGreet = createGreet('amigo');

argentinianGreet('Jose');
mexicanGreet('Jose');
colombianGreet('Jose');
