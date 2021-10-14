/* TOPIC: functions in JS are first-class functions, which means they are objects
https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/

which means, they can be stored in variables, passed into arguments, and returned
*/

/* function statement / delcaration */
/* memorize: "starts by declaring that it's a function, syntatically" */
/* 
hoisted before the javascript program is run
functionName.prototype automatically added 
*/
function boo() {

}

/* function expression */
/* memorize: "evaluated like an expression and stored in a variable" */
/* 
hoisting works like any other const variable. 
in TDZ until the interpreter reached that line of code
*/
const foo = function() {

}



/* arrow functions 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
/* 
> does not have its own bindings to this or super
if use this within an arrow function, it will refer to this of its parent lexical environment

> should not be used as methods
> not suitable for call, apply, and bind methods
> cannot be used as (function) constructors 
*/
const foo2 = () => {
  console.log(this) // will reference this of its parent lexical environment
}



/* factory functions vs constructor functions 
https://chamikakasun.medium.com/javascript-factory-functions-vs-constructor-functions-585919818afe
*/

/* factory functions */
/* 
any function, which is not a class or constructor, that returns a (new) object. 
it does not use the new keyword
it's like a "factory" that generates / outputs an object
*/

function person(name) {
  const person = {}
  person.name = name
  return person
}

console.log('person', person)


/* constructor functions */
/* 
uses the "new" keyword to create instances of the object type
capitalizes first character
*/

function Person(name) {
  this.name = name
}

const person1 = new Person('boo')

console.log('Person', Person)
console.log('person1', person1)

/* "new" operator */

/* 
"new" operator creates an instance of an object type
object types can be built-in or user defined

1. creates a plain javascript object
2. adds __proto__ property to the object, which links to the constructor function's prototype object
3. binds "this" and the newly created object in step 1. 
ie) "this" now refers to the object created in step 1
4. returns "this" if the constructor function doesn't return an object
*/
