/* Q: QWrong What would be the output of following code ? */

// var employeeId = 'b';

// function Employee() {
// 	this.employeeId = 'a';
// }

// console.log(new Employee().employeeId); 

// Employee.prototype.employeeId = 'c'; 
// Employee.prototype.JobId = 'd';

// console.log(new Employee().JobId);  
// console.log(new Employee().employeeId);

/* --ans-- */
/* instance property takes priority over object type prototype */


/* Q: QRetry What would be the output of following code ? */

// function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () => {
// 	console.log(this.name)
// }

// let personObj = {
// 	name: "Tony",
// 	print: getName1
// }

// personObj.print();
// personObj.getName2(); 


/* Q: QCorrect what does the new keyword do? */

/* --ans-- */

/* 
create a new empty object
creates a reference to the prototype object 
assigns the newly created object to this
return this 
*/

/* Q: QWrong QWrong value of A .. G  */

// class Person {}
// class Employee2 extends Person {}
// class Developer extends Employee2 {}
// const tom = new Developer();

// Object.getPrototypeOf(tom) === Developer.prototype; // A
// Object.getPrototypeOf(tom) === Employee2.prototype; // B
// Developer.isPrototypeOf(tom); // C
// Developer.prototype.isPrototypeOf(tom); // D
// Employee2.prototype.isPrototypeOf(tom); // E
// Person.prototype.isPrototypeOf(tom); // F
// Object.prototype.isPrototypeOf(tom); // G

// /* --ans-- */

// Object.getPrototypeOf(tom) === Developer.prototype; // A: true
// Object.getPrototypeOf(tom) === Employee2.prototype; // B: false
// Developer.isPrototypeOf(tom); // C: false. Developer isn't a prototype. this is obviously false
// Developer.prototype.isPrototypeOf(tom); // D: true
// Employee2.prototype.isPrototypeOf(tom); // E: true
// Person.prototype.isPrototypeOf(tom); // F: true
// Object.prototype.isPrototypeOf(tom); // G: true

// since tom is an instance of Developer, and it inherits from all of the following objects 
// all of the classes are in the prototype chain of tom 


/* Q: QWrong QCorrect output? (prototypes extending classes, overriding methods) 
https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up

es6 introduced classes, which turned JS prototypal inheritance to a blend between
prototypal and classical inheritance
classes are still based on prototypal inheritance under the hood
*/

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
// console.log(instance.getName())	//
// Proto.prototype.getName = function() { return 'Overridden in Proto' }
// console.log(instance.getName())	//
// MyClass.prototype.getName = function() { return 'Overridden in MyClass' }
// console.log(instance.getName())	//
// instance.getName = function() { return 'Overridden in instance' }
// console.log(instance.getName())	//

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



/* Q: QWrong QWrong QCorrect convert the following into ES5, utilizing constructor functions */
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


// /* --ans-- */

// function Person2(name) {
//   this.name = name;
// }
// Person2.prototype.hello = function hello() {
//   return 'hello ' + this.name;
// };
// function Developer2(name, title) {
//   Person2.call(this, name);
//   this.title = title;
// }

// // Object.create creates a new object, using its argument as the prototype
// // this allows prototype chaining
// Developer2.prototype = Object.create(Person2.prototype);

// // constructor is a pointer to the object type
// Developer2.prototype.constructor = Developer2;

// Developer2.prototype.getTitle = function getTitle() {
//   return this.title;
// };


/* Q: QRetry what is your opinion on the statement "javascript is an OO language" */


/* --ans-- */

/* 
some of the main qualities of object oriented languages are:
1. object + instance

2. polymorphism / inheritance 
prototypal inheritance 
different from classical inheritance

3. encapsulation
with closures
*/


/* Q: QRetry implement a new function to the string prototype: distanceBetween
returns distance between two characters
returns -1 if either character is not in the string
*/


/* --ans-- */

// String.prototype.distanceBetween = function(c1, c2) {
// 	let c1Idx = -1;
// 	let c2Idx = -1;

// 	this.split('').forEach((char, i) => {
// 		if (char === c1) {
// 			c1Idx = i;
// 		} else if (char === c2) {
// 			c2Idx = i;
// 		}
// 	})

// 	if (c1Idx === -1 || c2Idx === -1) {
// 		return -1
// 	}

// 	return Math.abs(c2Idx - c1Idx)
// }

// console.log('abcdefg'.distanceBetween('b', 'f'))


/* Q: QWrong add a new function to the string prototype
This function will return a new string with all uppercase characters swapped for lower case characters, and vice versa. Any non-alphabetic characters should be kept as they are.
https://www.tutorialspoint.com/adding-a-function-for-swapping-cases-to-the-prototype-object-of-strings-javascript
*/


/* --ans-- */

// const str = 'ThIS iS A CraZY StRInG';
// String.prototype.swapCase = function(){
//    let res = '';
//    for(let i = 0; i < this.length; i++){
//       if(this[i].toLowerCase() === this[i].toUpperCase()){
//          res += this[i];
//          continue;
//       };
//       if(this[i].toLowerCase() === this[i]){
//          res += this[i].toUpperCase();
//          continue;
//       };
//       res += this[i].toLowerCase();
//    };
//    return res;
// };
// console.log(str.swapCase());


/* Q: QWrong create new function on String prototype that repeats the string n times
https://arthur-zheng.gitbooks.io/front-end-interview-questions/content/string.html
*/


/* --ans-- */

// String.prototype.repeatify = String.prototype.repeatify || function(times) {
//   // avoid concat for better performance:
//   // like: str = ''; str += this;
//   const str = [];
//   for (var i = 0; i < times; i++) {
//       str.push(this);
//   }
//   return str.join('');
// };

// String.prototype.repeatify = function (times) {
//   if(times === 1) return this;
//   var halfString = String.prototype.repeat.call(this, Math.floor(times/2));
//   return half + half + (times & 1 ? this : '');
// }


/* Q: QRetry in JS, what's the best way to add a comma after every word? */

// const str1 = 'abd wepog aposid';
// const str2 = 'abd we dfwef';


/* --ans-- */

// String.prototype.addCommas = function() {
//   return this.split(' ').join(', ');
// }

// str1.addCommas()
// console.log('str1', str1)

/* Q: QWrong which would output the value of customProperty? */

// let myArray = [1, 2];
// myArray.customProperty = 'foo';
// myArray.customProperty2 = 'foo2';

// // opt 1
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

// // opt 2
// for (const elt of myArray) {
//   console.log(elt)
// }

// // opt 3
// myArray.forEach((elt) => {
//   console.log(elt)
// })

// // opt 4
// for (const idx in myArray) {
//   const elt = myArray[idx]
//   console.log(elt)
// }

/* Q: QWrong QCorrect output? */

// const obj = {
//   prop: 1
// }

// console.log('obj.prop', obj.prop)

// Object.defineProperty(obj, 'prop', {
//   writeable: false,
//   value: 2,
// })

// console.log('obj.prop', obj.prop)

// obj.prop = 3

// console.log('obj.prop', obj.prop)

/* Q: what is the benefit of the prototypal inheritance model */

/* --ans-- */
/* 
inheritance

*/


/* Q: QCorrect Extend the String object type with constructor functions  */


/* --ans-- */

// function CustomString(value) {
//   String.call(this, value);
// }

// CustomString.prototype = Object.create(String.prototype)
// CustomString.prototype.constructor = CustomString

// const str = new CustomString('foo')
// console.log('str', str)

/* Q: QCorrect Extend the String object with a class */

// class CustomString extends String {
//   constructor(value) {
//     super(value);
//   }

//   addCommas() {
//     return this.split('').join(', ');
//   }
// }

// const str = new CustomString('wpoeigj')
// console.log('str', str)
// console.log(str.addCommas())

/* Q: what is the prototype chain? */

/* --ans-- */

/* 
except for primitive types, JS only has objects
each object is linked to another object, which is called its prototype
*/

/* Q: extend string prototype with a pad start end method */


/* --ans-- */

// String.prototype.pad = function(str) {
//   return str + this + str

// }

// const foo = 'boo'
// console.log(foo.pad('same'))

/* Q: extend string prototype with capitalize first character method */

