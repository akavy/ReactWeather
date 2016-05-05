
function addPromise (a,b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve (a+b);
    } else {
      reject ('Not a valid sum');
    }
  });
}

addPromise('Rubbish',1).then(function(result) {
  console.log('It worked and the result is', result);
}, function(err) {
  console.log('Whoops, there was an error:', err);
});
