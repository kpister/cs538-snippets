class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  toString() {
    return `${this.make}@${this.model}`;
  }
  static get mySweetProp() {
    return 42;
  }
}

const f = new Car("Ford", "Focus");
console.log(f.toString());

const t = new Car("Toyota", "Corola");
console.log(t.toString());

// Car.prototype is shared by all objects created by calling new Car(...)
// That's right you can treat functions like objects!

console.log(f.__proto__ === Car.prototype); // ??

// We can define property common to all cars as before:
Car.prototype.color = "black";

console.log(f.color); // ??
// getProperty "color" of f
//     if it has it, return it
//     else getProperty "color" of f.__proto__
console.log(t.color); // ??

// Can override the default color that is defined on the prototype:

t.color = "red";

console.log(t.color); // ??
console.log(f.color); // ??

// We can define a method on the prototype as before:

Car.prototype.toColorString = function () {
  return `${this.make}, ${this.model}, ${this.color}`;
};

console.log(f.toColorString()); // ??
console.log(t.toColorString()); // ??
