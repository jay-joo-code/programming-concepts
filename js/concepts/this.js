/* TOPIC: this = a pointer to the instance 
this references the object that is currently calling the function 
*/

const counter = {
  count: 0,
  next: function () {
      return ++this.count;
  }
};

console.log('counter.count', counter.count)

// the this in next() references the counter object
// because the counter object is calling the next() method
counter.next();

console.log('counter.count', counter.count)


/* TOPIC: if this is referenced without context, it refers to the global object
global object
- browser: window
- node: global 
*/

console.log('this', this)
console.log('this === window', this === window)

/* TOPIC: case 1: simple function invocation 
for function invocations in the global scope, it's the same as the global object calling the method
show() is the same as window.show()
since the global object is calling the method, this refers to the global object
*/

function show() {
  console.log('this', this)
  console.log(this === window); // true
}

show();
window.show();  // same as show(); 


/* TOPIC: strict mode
strict mode sets this as undefined by default
*/

function showStrict() {
  'use strict'

  console.log('this', this) // undefined
}

showStrict()


/* TOPIC: case 2: method invocation 
when calling a method of an object, this refers to the object that owns the method
*/

const car = {
  brand: 'Honda',
  getBrand: function () {
    console.log('this', this)
    return this.brand;
  }
}

// since car is calling the method, this refers the car object
console.log(car.getBrand()); // Honda

/* TOPIC: calling a method from the global scope
this now refers to the global object
*/

const getBrand = car.getBrand
// since the global object does not have a property brand
// returns undefined
console.log('getBrand()', getBrand()) 

/* TOPIC: explicit this binding with the bind() method of Function.prototype 
getBrand inherits the bind() method from the Function prototype
*/
console.log('getBrand.bind', getBrand.bind)
console.log('Object.getPrototypeOf(getBrand)', Object.getPrototypeOf(getBrand))
console.log('getBrand.__proto__.__proto__', getBrand.__proto__.__proto__.constructor === Object)
console.log('getBrand.__proto__.__proto__.__proto__', getBrand.__proto__.__proto__.__proto__)

