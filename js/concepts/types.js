/* TOPIC: the set of types in JS consist of primitives values and objects
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


