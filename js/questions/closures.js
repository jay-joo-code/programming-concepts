// /* Q: output? QWrong QCorrect */

// function SecretiveProto(specialSecret) {
//   const secret = "secret text"
//   this.specialSecret = specialSecret

//   this.spillTheBeans = function() {
//     return secret
//   }
// }

// const blabbermouth = new SecretiveProto('special secret')
// console.log('blabbermouth.secret', blabbermouth.secret)
// console.log('blabbermouth.specialSecret', blabbermouth.specialSecret)
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


// /* Q: QCorrect change createStack so that it encapsulates stack.items */

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!

function createEncapStack() {
  const stack = []

  return {
    push(item) {
      stack.push(item)
    },
    pop() {
      return stack.pop()
    }
  }
}

const encapStack = createEncapStack()

encapStack.push(10)
encapStack.push(5)
console.log('encapStack.pop()', encapStack.pop())
console.log('encapStack.items', encapStack.items)

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

function createBase(value) {
  // implement
  return function(input) {
    return input + value
  }
}

var addSix = createBase(6);
console.log('addSix(10); // returns 16', addSix(10))
console.log('addSix(21); // returns 27', addSix(21))

/* Q: QWrong output? */

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



