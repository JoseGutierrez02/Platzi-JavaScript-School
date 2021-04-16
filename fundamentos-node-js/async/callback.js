function hello(name, myCallback) {
  setTimeout(function () {
    console.log('Hello ' + name);
    myCallback(name);
  }, 1500);
}

function bye(name, anotherCallback) {
  setTimeout(function() {
    console.log('Bye ' + name);
    anotherCallback();
  });
}

console.log('Starting Process...');

hello('Jose', function (name) {
  bye(name, function() {
    console.log('Finishing Process...');
  })
});
