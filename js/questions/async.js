/* Q: QWrong implement promise object */

// function Promise(fn) {
//   this.fn = fn;
//   this.error = null;

//   this.then = function(cb) {
//     try {
      
//     } catch (error) {
//       this.error = error;
//     }
//   }

//   this.catch = function(errorCb) {
//     if (this.error) {
//       errorCb(error)
//     }
//   }
// }

// const promise = new Promise((resolve, reject) => {

// })

// promise
//   .then((res) => {

//   })
//   .catch((error) => {

//   })

/* Q: QWrong what are promises? */

/* --ans-- */

/* way of handling asynchronous tasks in JS */
/* built in states pending, fulfilled, rejected states */
/* built in methods then, catch, finally */
/* prevents callback hell, better readability */

/* Q: QWrong returns? */

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise])
//   .then(res => console.log(res));


/* Q: QWrong output? */

// async function getData() {
//   return await Promise.resolve('I made it!');
// }

// const data = getData();
// console.log(data);

/* Q: QCorrect */

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

/* Q: QWrong what is it's value?*/

Promise.resolve(5);

/* Q: QWrong output? */

// async function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//   }
// }

// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen) {
//     console.log(item);
//   }
// })();

/* Q: QCorrect output? */

// const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();


/* Q: QWrong output? */

// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log('res', res)
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();

/* --ans-- */

/* 
First, we invoke funcOne. On the first line of funcOne, we call the asynchronous setTimeout function, from which the callback is sent to the Web API. (see my article on the event loop here.)

Then we call the myPromise promise, which is an asynchronous operation.

Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the setTimeout callback. This means that Last line 1! gets logged first, since this is not an asynchonous operation.

Since the callstack is not empty yet, the setTimeout function and promise in funcOne cannot get added to the callstack yet.

In funcTwo, the variable res gets Promise because Promise.resolve(Promise.resolve('Promise')) is equivalent to Promise.resolve('Promise') since resolving a promise just resolves it's value. The await in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so Promise 2! and then Last line 2! are logged and the setTimeout is sent to the Web API.

Then the call stack is empty. Promises are microtasks so they are resolved first when the call stack is empty so Promise 1! gets to be logged.

Now, since funcTwo popped off the call stack, the call stack is empty. The callbacks waiting in the queue (() => console.log("Timeout 1!") from funcOne, and () => console.log("Timeout 2!") from funcTwo) get added to the call stack one by one. The first callback logs Timeout 1!, and gets popped off the stack. Then, the second callback logs Timeout 2!, and gets popped off the stack.
*/

/* Q: QWrong */

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4]) 
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res)) 
// 	.catch(err => console.log(err))


/* Q: QWrong write a sleep function with promises */


/* --ans-- */

// const sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

/* Q: QWrong output? */

// const promise = new Promise((resolve, reject) => {
//   reject(Error('Some Error Occurred'));
// })
// .catch(error => console.log(error))
// .then(error => console.log(error));

/* --ans-- */

/* The catch function implicitly returns a promise, 
which can obviously be chained with a then. 
Since nothing is returned from the catch block, 
when error is logged in the then block it displays undefined. */

/* Q: QWrong output? */

// const promise = new Promise(res => res(2));

// promise
// .then(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
//   return v * 2;
// })
// .finally(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
// });

/* --ans-- */

/* finally doesn't receive any arguments */
/* the return value of finally is not considered in the then chain */


/* Q: QWrong output?*/

// function job() {
//   return new Promise(function(resolve, reject) {
//       reject();
//   });
// }

// let promise = job();

// promise
//   .then(function() {
//     console.log('Success 1');
//   })
//   .catch(function() {
//     console.log('Error 1');
//   })
//   .then(function() {
//     console.log('Success 4');
//   });


/* Q: QRetry output? */

// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data); 

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error); 

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); 

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });


