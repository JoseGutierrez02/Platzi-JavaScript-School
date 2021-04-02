function* helloWorld() {
  if(true) {
    yield 'Hello, ';
  }

  if(true) {
    yield 'World';
  }
}

const helloGenerator = helloWorld();
console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);
