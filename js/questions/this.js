

/* Q: output? QCorrect */

// const fn = () => {};
// console.log(typeof fn);

/* Q: QWrong QWrong output? */

// 'use strict';

// const user = {
//   id: 551,
//   name: 'Tom',
//   getId() {
//     return this.id;
//   },
//   credentials: {
//     id: 120,
//     username: 'tom',
//     getId() {
//       return this.id;
//     }
//   },
// };

// const getId = user.credentials.getId;
// console.log(getId()); 

/* Q: output? QWrong */

// function hello() {
//   setTimeout(function() {
//     console.log(this.foo);
//   }, 100);
// }

// hello.call({foo: 'tom'});

/* Q: output? QWrong */

// function hello() {
//   function hi() {
//     console.log('this', this);
//     console.log(this.foo);
//   }
//   hi()
// }

// hello.call({foo: 'tom'});

/* Q: how to fix the below code to output 'tom'? QWrong */

// function hello() {
//   setTimeout(function() {
//     console.log(this.foo);
//   }, 100);
// }

// hello.call({foo: 'tom'});

/* Q: how to fix code below to print name? QCorrect */

// function Person(nickname) {
//   this.nickname = nickname;
// }

// Person.prototype.getName = () => {
//   return this.nickname;
// };

// const tom = new Person('Tom');
// console.log('tom.getName()', tom.getName());

/* Q: what could be an implementation of makeAdd? QWrong QCorrect */

// const addTwo = makeAdd(2);
// console.log('addTwo(3)', addTwo(3)) // -> 5

// const addTen = makeAdd(10);
// console.log('addTen(30)', addTen(30)) // -> 40

/* Q: How can we define a function that takes a function as argument 
and returns a new version of the function that can be called only once? QWrong */

// function callOnce(fn) {
// }

// function printBoo(suffix) {
//   console.log('boo ' + suffix)
// }

// var onceBoo = callOnce(printBoo)
// onceBoo('foo1')
// onceBoo('foo2')


/* Q: output? QWrong QCorrect */

// const r = (() => {
//   const n = 1;
//   const m = 2;
//   return n + m;
// })();

// console.log(n);

/* Q: QWrong does the code below have any problems? */

// function encapsulatedStack() {
//   this.items = []

//   return {
//     push(item) {
//       this.items.push(item)
//     },
//     pop() {
//       return this.items.pop()
//     }
//   }
// }


