/* Q: output values? QWrong */

// function h() {
//   function k() {
//     var b;
//   }
//   var a;
//   if (true) {
//     var c;
//   }
//   k()
//   console.log('a', a)
//   console.log('b', b)
//   console.log('c', c)
// }

// h()
// console.log('a', a)

/* Q: why does this not throw an error? */

// foo = 'boo'

/* --ans-- */
/* defaults to window.foo */
/* 
'use strict' will prevent it from automatically referring to the global variable 
will throw a reference error: foo is not defined
*/

/* Q: In JS, how would you make a variable read-only? */

/* --ans-- */

function readOnlyVar(initValue) {
  var value = initValue

  return {
    getValue() {
      return value
    }
  }
}

var variable = readOnlyVar(2)
console.log('variable.getValue()', variable.getValue())
console.log('variable.value', variable.value)


