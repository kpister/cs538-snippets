// using our fake require:
{
  const mod = requireMyModule();

  console.log(mod.myVar); // ??
  mod.myFunc("what?"); // ??
  mod.myFunc("cs538 is fun!"); // ??
}

function myModule(exports) {
  // same code as module-node.js:
  const secret = "cs538 is fun!"; // scoped to this function, hidden to outside world
  exports.myVar = 42;
  exports.myFunc = function (x) {
    if (x === secret) {
      console.log('yes!');
    } else {
      console.log('guess again!');
    }
  };
}

function requireMyModule() {
  // create new object that will be populated by the module
  const exports = {};
  myModule(exports);
  return exports;
}
