const obj = {
  "x-w00t": 10,
  x: 1337,
  f: function (y) {
    this.x++;
    return this.x + y;
  }
};

function fun_obj() {
  let x_woot = 10;
  let x = 1337;
  return function (y) {
    x++;
    return x + y;
  }
}

let o1 = fun_obj()
o1.x

console.log(obj.x); // ??
console.log(obj.f(3)); // ??
console.log(obj["x"]); // ??
console.log(obj["x-w00t"]) // ??
