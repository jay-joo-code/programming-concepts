
/* TOPIC: scope 
var: function scope
let, const: block scope
*/
console.log('run')

function userDetails(username) {
  if(username) {
    console.log(salary); // undefined due to hoisting
    // console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible to due function scope)
  // console.log(age); //error: age is not defined(due to block scope)
}
userDetails('John');

/* TOPIC: hoisting of const and let 
const and let are hoisted, but are not initialized
before the interpreter reaches the line of code, 
they are in the temporal dead zone
an error is thrown if reference the variables before initialization
*/

function hoisting() {
  var foo = boo
  var boo = 2
  console.log('foo', foo)
  console.log('boo', boo)

  console.log('bar', bar) // ReferenceError
  let bar = 2
  console.log('bar', bar)
}

hoisting()


/* TOPIC: undefined vs null vs not defined 

*/