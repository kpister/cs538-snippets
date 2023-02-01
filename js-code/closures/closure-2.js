function f(x) {
  let y = x; // note that x is captured here
  return function (z) {
    y += z;
    return y;
  };
}

const h = f(5); // h = function
console.log(h(3)); // 8
console.log(h(4)); // 9

const j = f(5);
console.log(j(3)); // 8
console.log(j(4)); // 12

console.log(h === j); // ??
