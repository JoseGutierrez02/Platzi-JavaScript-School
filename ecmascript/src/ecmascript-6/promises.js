// ES6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Oh oh :o Something went wrong!!!');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log('Promise resolved :D'))
  .catch((error) => console.log(error));
