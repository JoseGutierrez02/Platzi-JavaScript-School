function hello(name) {
  return new Promise((resolve, reject) => {
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

async function main() {
  let name = await hello('Jose');
  await talk();
  await talk();
  await talk();
  await bye(name);
  console.log('Done');
}

console.log('Start...');
main();