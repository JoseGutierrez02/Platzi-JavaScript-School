function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hello ' + name);
      resolve(name);
    }, 1500);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla bla...');
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bye ' + name);
      resolve();
    }, 1000);
  });
}

// --

console.log('Starting process...');
hello('Jose')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then(() => console.log('Done'))
  .catch(error => console.error(error));