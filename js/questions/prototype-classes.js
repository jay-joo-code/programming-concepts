/* Q: What would be the output of following code ? */
var employeeId = 'b';

function Employee() {
	this.employeeId = 'a';
}
console.log(new Employee().employeeId); // a
Employee.prototype.employeeId = 'c';
Employee.prototype.JobId = 'd';
console.log(new Employee().JobId);  // d
/* instance property takes priority over object type prototype */
console.log(new Employee().employeeId); // a


/* Q: What would be the output of following code ? */

function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () => {
	console.log(this.name)
}

let personObj = {
	name: "Tony",
	print: getName1
}

personObj.print(); // Tony
personObj.getName2(); // undefined


/* Q: what does the new keyword do? QCorrect */

/* Q: value of A .. G QWrong */

class Person {}
class Employee2 extends Person {}
class Developer extends Employee2 {}
const tom = new Developer();

Object.getPrototypeOf(tom) === Developer.prototype; // A
Object.getPrototypeOf(tom) === Employee2.prototype; // B
Developer.isPrototypeOf(tom); // C
Developer.prototype.isPrototypeOf(tom); // D
Employee2.prototype.isPrototypeOf(tom); // E
Person.prototype.isPrototypeOf(tom); // F
Object.prototype.isPrototypeOf(tom); // G

/* -- ans -- */

Object.getPrototypeOf(tom) === Developer.prototype; // A: true
Object.getPrototypeOf(tom) === Employee2.prototype; // B: false
Developer.isPrototypeOf(tom); // C: false. Developer isn't a prototype. this is obviously false
Developer.prototype.isPrototypeOf(tom); // D: true
Employee2.prototype.isPrototypeOf(tom); // E: true
Person.prototype.isPrototypeOf(tom); // F: true
Object.prototype.isPrototypeOf(tom); // G: true

// since tom is an instance of Developer, and it inherits from all of the following objects 
// all of the classes are in the prototype chain of tom 


/* TOPIC: output? (prototypes extending classes, overriding methods) QWrong
https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up

es6 introduced classes, which turned JS prototypal inheritance to a blend between
prototypal and classical inheritance
classes are still based on prototypal inheritance under the hood
*/

function Proto() {
  this.name = 'Proto'
  return this;
}

Proto.prototype.getName = function() {
  return this.name
}

class MyClass extends Proto {
  constructor() {
    super()
    this.name = 'MyClass'
  }
}

const instance = new MyClass()
console.log(instance.getName())	// MyClass
Proto.prototype.getName = function() { return 'Overridden in Proto' }
console.log(instance.getName())	// 'Overridden in Proto'
MyClass.prototype.getName = function() { return 'Overridden in MyClass' }
console.log(instance.getName())	// 'Overridden in MyClass'
instance.getName = function() { return 'Overridden in instance' }
console.log(instance.getName())	// 'Overridden in instance'

/* --ans-- */

// function Proto() {
//   this.name = 'Proto'
//   return this;
// }

// Proto.prototype.getName = function() {
//   return this.name
// }

// class MyClass extends Proto {
//   constructor() {
//     super()
//     this.name = 'MyClass'
//   }
// }

// const instance = new MyClass()
// console.log(instance.getName())	// MyClass
// Proto.prototype.getName = function() { return 'Overridden in Proto' }
// console.log(instance.getName())	// 'Overridden in Proto'
// MyClass.prototype.getName = function() { return 'Overridden in MyClass' }
// console.log(instance.getName())	// 'Overridden in MyClass'
// instance.getName = function() { return 'Overridden in instance' }
// console.log(instance.getName())	// 'Overridden in instance'



/* Q: QWrong convert the following into ES5, utilizing constructor functions */
/* class in es6 is just a syntactic sugar coating around constructor functions */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     return 'hello ' + this.name;
//   }
// }

// class Developer extends Person {
//   constructor(name, title) {
//     super(name);
//     this.title = title;
//   }
//   getTitle() {
//     return this.title;
//   }
// }


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.hello = function() {
//   return 'hello ' + this.name;
// }

// function Developer(name, title) {
//   Person.call(this, name);
//   this.title = title;
// }


/* --ans-- */

function Person2(name) {
  this.name = name;
}
Person2.prototype.hello = function hello() {
  return 'hello ' + this.name;
};
function Developer2(name, title) {
  Person2.call(this, name);
  this.title = title;
}

// Object.create creates a new object, using its argument as the prototype
// this allows prototype chaining
Developer2.prototype = Object.create(Person2.prototype);

// constructor is a pointer to the object type
Developer2.prototype.constructor = Developer2;

Developer2.prototype.getTitle = function getTitle() {
  return this.title;
};

class Root {
  constructor() {
    this.foo = 'boo'
  }
}

class Extended extends Root {
}

console.log('Extended.__proto__.prototype === Root.prototype', Extended.__proto__.prototype === Root.prototype)

