function anotherFunction() {
  willBrake();
}

function willBrake() {
  return 3 + z;
}

function willBrakeAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch(err) {
      console.error('Error in my async function');
      cb(err);
    }
  });
}

try {
  // anotherFunction();
  willBrakeAsync(function(err) {
    console.log(err.message);
  });
} catch(error) {
  console.error('Damn, something broke...', error.message);
  console.log('But it\' ok, we got it');
}

console.log('This is at the end');
