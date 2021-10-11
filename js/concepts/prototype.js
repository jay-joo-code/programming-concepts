/* prototype chaining */

/* 
https://chamikakasun.medium.com/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04

*/

/* defining objects without prototype chaining */

function Person(name) {
  let person = {}
  person.name = name
  
  person.eat = () => {
    console.log(name, 'eat')
  }

  return person
}

const mike = Person('mike')
const tom = Person('tom')

mike.eat()
tom.eat()

/* 
creates eat method for all person objects. wastes memory. 
need something like static functions in Java, so that the method can be defined once
and used for all objects / instances
*/

/* 
prototype is a property of a javascript constructor function
every time we create a function, the js engine adds a prototype object to the prototype property
*/

/* 
.prototype is a property of the function constructor, and serves as a blueprint for creating __proto__ objects
.__proto__ is a property of the object type instances, they are generated based on .prototype

since .__proto__ is created based on .prototype, the properties and methods in both are exactly the same
*/

function Person2(name) {
  this.name = name
}

const person2 = new Person2('bob')

console.log('Person2.__proto__', Person2.__proto__)
console.log('Person2.prototype', Person2.prototype)
console.log('person2.__proto__', person2.__proto__)
console.log('person2.prototype', person2.prototype)

/* only constructor functions have prototypes
arrow functions do not have prototypes
*/
const Person3 = () => {
  let person = {}
  return person
}

console.log('Person2.prototype', Person2.prototype)

/* function expressions also have prototypes 
prototypes exist for both function declarations and expressions
*/

const Person4 = function() {
  let person = {}
  return person
}

console.log('Person3.prototype', Person3.prototype)


/* example of user defined object type */

function PersonObject(name) {
  this.name = name
}

console.log('PersonObject', PersonObject)
console.log('PersonObject.prototype', PersonObject.prototype)

// ObjectType.prototype.consturctor points to ObjectType
console.log('PersonObject.prototype.constructor === PersonObject', PersonObject.prototype.constructor === PersonObject)

PersonObject.prototype.eat = function() {
  console.log('eat', this.name)
}

const sam = new PersonObject('sam')

console.log('sam', sam)
console.log('sam.__proto__', sam.__proto__)

// instance.__proto__ is a pointer to the object type's prototype property
console.log('sam.__proto__ === PersonObject.prototype', sam.__proto__ === PersonObject.prototype)

// all instance.__proto__ are pointing to the same object 
const alex = new PersonObject('alex')
console.log('alex.__proto__ === sam.__proto__', alex.__proto__ === sam.__proto__)



/* prototype chain */

const apple = {}
console.log('apple', apple)

// apple is just an empty object, but something is handling the object -> string conversion
console.log('apple.toString()', apple.toString())

console.log('apple.__proto__', apple.__proto__)

// apple is an instance of a built-in object, Object
console.log('apple.__proto__ === Object.prototype', apple.__proto__ === Object.prototype)


console.log('Object.getPrototypeOf(apple)', Object.getPrototypeOf(apple))


/* TOPIC: everything in Javascript inherits from Object.prototype
all built-in objects have a prototype object, and it points to Object.prototype
ie) all built-in objects inherit from Object
*/

const boo = [1, 2, 3]
console.log('boo', boo)
console.log('boo.__proto__ === Array.prototype', boo.__proto__ === Array.prototype)
console.log('boo.__proto__.__proto__ === Array.__proto__', boo.__proto__.__proto__ === Array.prototype.__proto__)
console.log('Array.prototype.__proto__ === Object.prototype', Array.prototype.__proto__ === Object.prototype)

/* TOPIC: Object.getPrototypeOf() vs .prototype vs .__proto__
https://stackoverflow.com/questions/38740610/object-getprototypeof-vs-prototype
*/

function MyConstructor() {}

const obj = new MyConstructor()

console.log('Object.getPrototypeOf(obj) === MyConstructor.prototype', Object.getPrototypeOf(obj) === MyConstructor.prototype)
console.log('obj.__proto__ === MyConstructor.prototype', obj.__proto__ === MyConstructor.prototype)

/*  
ObjectType.prototype is the prototype object for the object type
instance.__proto__ or Object.getPrototypeOf(instance) are pointers to the prototype object of the object type

ie) Object.getPrototypeOf() is exactly the same as .__proto__ 
.__proto__ is just deprecated, in favor of Object.getPrototypeOf()
*/


/* TOPIC: overriding methods */

function CustomFunction() {
  this.toString = function() {
    return 'arbitrary string from toString'
  }
}

const myFunction = new CustomFunction()
console.log('myFunction.toString()', myFunction.toString())



