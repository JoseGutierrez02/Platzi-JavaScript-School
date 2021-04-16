function hello(name, myCallback) {
  setTimeout(function () {
    console.log('Hello ' + name);
    myCallback(name);
  }, 1500);
}

function talk(talkCallback) {
  setTimeout(function() {
    console.log('Bla bla bla bla...');
    talkCallback();
  });
}

function bye(name, anotherCallback) {
  setTimeout(function() {
    console.log('Bye ' + name);
    anotherCallback();
  }, 1000);
}

function conversation(name, times, callback) {
  if(times > 0) {
    talk(function() {
      conversation(name, --times, callback);
    }); 
  } else {
    bye(name, callback)
  }
}

// --

console.log('Starting Process...');
hello('Jose', function (name) {
  conversation(name, 3, function () {
    console.log('Done!');
  });
})

// hello('Jose', function (name) {
//   talk(function() {
//     talk(function() {
//       talk(function() {
//         bye(name, function() {
//           console.log('Finishing Process...');
//         });
//       });
//     });
//   })
// });

