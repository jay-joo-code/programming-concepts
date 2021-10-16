/* TOPIC: the set of types in JS consist of 
1. primitive values
2. objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
*/

/* TOPIC: primitive types are immutable */

/* 
Boolean
null
undefined
Number
*/

/* TOPIC: all primitive values have a corresponding object wrapper (except for null and undefined) 
string => String
boolean => Boolean
... 

primitive type: lowercase
object wrapper: upper camelcase
*/

console.log('Number.prototype.__proto__ === Object.prototype', Number.prototype.__proto__ === Object.prototype)

/* TOPIC: typeof (dynamic type checks) */

/* typeof <operand> returns a lowercase string indicating the type of the operand */
/* only returns 1 of the 7 basic types: number, string, boolean, object, function, undefined or Symbol */
/* can't say it only returns primitive types, because it returns object and Symbol */
console.log('typeof true', typeof true) // boolean
console.log('typeof "foo"', typeof "foo") // string
console.log('typeof {}', typeof {}) // object


/* TOPIC: instanceof (dynamic type checks) */

/* <operand1> instanceof <operand2> */
/* checks whether operand2 exists in the prototype chain of operand1 */
/* since the checking works by checking the prototype chain, 
instanceof doesn't work with primitive types */

console.log('"boo" instanceof string', "boo" instanceof String) // false. "boo" is not an instance of String object
console.log('new String("boo") instanceof String', new String("boo") instanceof String)   // true

function Animal() {}

const cat = new Animal()

console.log('cat instanceof Animal', cat instanceof Animal) // true



