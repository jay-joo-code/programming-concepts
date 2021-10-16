/* Q: QWrong */

(function() {
  console.log('funcExp', funcExp)
	console.log(typeof funcExp);

  console.log('funcDec', funcDec)
	console.log(typeof funcDec);

	var funcExp = function(){
		console.log("funcExp");
	}

  function funcDec() {
    console.log('funcDec')
  }
}());

/* Q: QWrong */

var z = 1, y = z = typeof y;
console.log(y);

/* --ans-- */

// var z;
// z = 1;
// var y;
// z = typeof y;
// y = z;

/* Q: QWrong */

// NFE (Named Function Expression)
// var foo = function bar() { 
//   console.log('typeof bar', typeof bar)
//   return 12; 
// };
// foo()
// console.log('typeof bar()', typeof bar())

/* Q: QCorrect */

function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());  // number

/* Q: QCorrect */

console.log(typeof typeof 1); // string

/* Q: QCorrect what's returned? */

[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

