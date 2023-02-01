const secret = "cs538 is fun!"; // scoped to this function, hidden to outside world
exports.myVar = 42;
exports.myFunc = function (x) {
  if (x === secret) {
    console.log('yes!');
  } else {
    console.log('guess again!');
  }
};
