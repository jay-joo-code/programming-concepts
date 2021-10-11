/* TOPIC: this = a pointer to the instance 
this references the object that is currently calling the function 
https://www.javascripttutorial.net/javascript-this/
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
bind() returns a new function with the this keyword set to a specific value
*/

const bindedGetBrand = car.getBrand.bind(car)
console.log('bindedGetBrand()', bindedGetBrand())

const bike = {
  brand: 'different bike brand'
}

const bikeBindedGetBrand = car.getBrand.bind(bike)
console.log('bikeBindedGetBrand()', bikeBindedGetBrand()) // different bike brand


/* TOPIC: case 3: constructor invocation 
the new keyword 
1. creates new object
2. creates a pointer to the object type's prototype
3. assigns this as a pointer to the newly created object
4. returns this if the constructor doesn't return anything
*/

function Car(brand) {
  this.brand = brand
}

Car.prototype.getBrand = function() {
  return this.brand
}

var honda = new Car('honda')
console.log('honda.getBrand()', honda.getBrand())

/* TOPIC: case 4: indirect invocation. call(), apply()
call(object, arg1, arg2, ...) 
apply(object, args[])

Call for Comma, Apply for Array
*/

Car.prototype.brandString = function(prefix, suffix) {
  console.log(prefix + this.brand + suffix)
}

var bmw = new Car('bmw')

var brandString = honda.brandString

brandString.call(honda, 'the car is a ', ' e class')
brandString.apply(honda, ['the car is a ', ' e class'])


/* TOPIC: arrow functions 
arrow functions do not have its own this binding
therefore this in arrow functions refer to the this of its lexical parent
*/

Car.prototype.arrow = () => {
  // lexical this binding means this refers to the global object
  console.log('this', this) // window
}

bmw.arrow()



