// /* Q: output? QWrong QCorrect QWrong */

// function SecretiveProto() {
//   const secret = "secret text"
//   this.publicText = 'public text'

//   this.spillTheBeans = function() {
//     return secret
//   }
// }

// const blabbermouth = new SecretiveProto()
// console.log('blabbermouth.secret', blabbermouth.secret)
// console.log('blabbermouth.publicText', blabbermouth.publicText)
// console.log('blabbermouth.spillTheBeans()', blabbermouth.spillTheBeans())

// /* Q: which functions access other scope? QCorrect */

// const result = (function immediate(number) {
//   const message = `number is: ${number}`;
//   return message; // no
// })(100);

// setTimeout(function delayedReload() {
//   location.reload();  // yes
// }, 1000);

// /* Q: logs? QCorrect */

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged? 0
//   })(1);
// })(0);

// /* Q: logs? QWrong */

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// /* --ans-- */

// // let count = 0;
// // (function immediate() {
// //   if (count === 0) {
// //     let count = 1;
// //     console.log(count); // What is logged? 1
// //   }
// //   console.log(count); // What is logged? 0
// // })();

// /* Q: QCorrect */

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// /* Q: QWrong */

// function createIncrement() {
//   let count = 0;

//   function increment() {
//     count++;
//   }

//   let message = `Count is ${count}`;

//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();

// increment();
// increment();
// increment();

// log(); // What is logged?

/* --ans-- different implementation below */

// function incrementor() {
//   let value = 0

//   function increment() {
//     value += 1
//   }

//   function getValue() {
//     return value
//   }

//   return {
//     getValue,
//     increment
//   }
// }

// const instance = incrementor()

// instance.increment()
// instance.increment()
// console.log('getValue()', instance.getValue())


// /* Q: QCorrect change createStack so that it encapsulates stack.items */

// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     }
//   };
// }

// const stack = createStack();

// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items; // => [10]
// stack.items = [10, 100, 1000]; // Encapsulation broken!

// function createEncapStack() {
//   const stack = []

//   return {
//     push(item) {
//       stack.push(item)
//     },
//     pop() {
//       return stack.pop()
//     }
//   }
// }

// const encapStack = createEncapStack()

// encapStack.push(10)
// encapStack.push(5)
// console.log('encapStack.pop()', encapStack.pop())
// console.log('encapStack.items', encapStack.items)

/* Q: QWrong implement multiply
If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.

But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.
*/

// function multiply(num1, num2) {
//   // Write your code here...
// }

// multiply(4, 5);
// console.log('multiply(4, 5); // => 20', multiply(4, 5))
// console.log('multiply(3, 3); // => 9', multiply(3, 3))
// const double = multiply(2);
// console.log('double(5);  // => 10', double(5))
// console.log('double(11); // => 22', double(11))

/* --ans-- */

// function multiply(number1, number2) {
//   if (number2 !== undefined) {
//     return number1 * number2;
//   }
//   return function doMultiply(number2) {
//     return number1 * number2;
//   };
// }

/* Q: QCorrect */

// function createBase(value) {
//   // implement
//   return function(input) {
//     return input + value
//   }
// }

// var addSix = createBase(6);
// console.log('addSix(10); // returns 16', addSix(10))
// console.log('addSix(21); // returns 27', addSix(21))

/* Q: QWrong QCorrect output? */

// var a = 100;
// function createFunction() {
//     var a = 200;
//     return function func() {
//         return a;
//     }
// }
// console.log(createFunction()());


// /* --ans-- */

// var a = 100;
// function createFunction() {
//     var a = 200;
//     return function func() {
//         return a;
//     }
// }
// console.log(createFunction()()); // 200

/* Q: QWrong give an example of encapsulation with closures and constructor functions */

// function Example() {
//   const secret = 'secret text'

//   this.getSecret = function() {
//     return secret
//   }

//   this.getSecretArrow = () => {
//     return secret
//   }
// }

// const instance = new Example()
// console.log('instance.getSecret()', instance.getSecret())
// console.log('instance.getSecretArrow()', instance.getSecretArrow())


/* --ans-- */

// function Example() {
//   const secret = 'secret text'

//   this.getSecret = function() {
//     return secret
//   }
// }

// const instance = new Example()
// console.log('instance.getSecret()', instance.getSecret())
// console.log('instance.secret', instance.secret)

/* Q: QWrong implement a createCounter factory function with a private field count */

// function createCounter() {
//   const count = 0

//   return {
//     getCount() {
//       return count
//     }
//   }
// }

// const counter = createCounter()
// console.log('counter.count', counter.count)
// console.log('counter.getCount()', counter.getCount())

/* Q: give example of a private field in JS classes */

// class Example {
//   #secret = 'secret text'

//   getSecret() {
//     return this.#secret
//   }
// }

// const instance = new Example()
// console.log('instance.getSecret()', instance.getSecret())
// console.log('instance.secret', instance.secret)


/* Q: QRetry */

// var x = 'log'
// function f1() {
//   console.log(x)
// }
// x = 'dog'
// function f2() {
//   f1()
// }

// f2()


/* Q: QRetry what is a closure? */

/* --ans-- */

/*
a closure is a function bundled with its lexical scope.
it's created at run time during function creation
since the closure is created during function creation,
the lexical scope in the closure depends on where the function is defined
*/

/* Q: QRetry what is a pure function? */

/* --ans-- */
/*
the output of a pure function is only dependent on the arguments supplied.
the output is not affected by any external states or variables.
*/
