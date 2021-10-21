/* Q: QWrong what is an IIFE and why is it used? */


/* --ans-- */

/* They can be used to guard against unintended effects of hoisting: */

/* Q: QRetry what are first class functions? */

/* --ans-- */
/* 
functions in a programming language is considered first class 
if they're treated like any other variable. 
functions can be assigned to a variable, passed in to arguments, and return from a function. 

*/

/* Q: QRetry what are higher order functions? */


/* --ans-- */

/* 
functions that return another function are called higher order functions. 

*/

/* Q: QRetry what is currying? what is the potential benefit of currying? */

/* --ans-- */

/* 
https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

currying is when you break down a function so that it takes multiple arguments, one at a time

since currying can break down a large function into multiple, smaller functions,
it could improve code maintainability / reusability
*/


/* Q: QRetry compose the functions add5 and multiply 6 */

// const add5 = x => x + 5;
// const multiply6 = x => x * 6;


/* --ans-- */

// const multiply6Add5 = compose(add, multiply);
// multiply6Add5(2); // 17 

/* Q: QWrong what are generator functions? */

/* --ans-- */

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

generators are functions that can be exited and reentered. 
they maintain their lexical scope / context between exits and reentries
*/

/* Q: QWrong output? */

// function* gen1() {
//   console.log(yield 1)
//   console.log(yield 2)
//   console.log(yield 3)
// }

// const iterator = gen1()

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

/* Q: QWrong what does this log? */

// function* logGenerator() {
//   console.log(0);
//   console.log(1, yield);
//   console.log(2, yield);
//   console.log(3, yield);
// }

// var gen = logGenerator();

// gen.next('hamburger');             
// gen.next('pretzel');    
// gen.next('california'); 
// gen.next('mayonnaise'); 

/* Q: QWrong outputs? */

// function* idMaker() {
//   var index = 0;
//   while (true)
//     yield index++;
// }

// var gen = idMaker();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);