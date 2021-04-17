function asyncFunction(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch(err) {
      callback(err, null);
    }
  }, 1000);
}

asyncFunction(function (err, data) {
  if (err) {
    console.error('We have an error');
    console.error(err.message);
    return false;
  }

  console.log('Everything went well, my data is', data);
});

