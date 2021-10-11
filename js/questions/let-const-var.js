/* Q: output values? QWrong */

function h() {
  function k() {
    var b;
  }
  var a;
  if (true) {
    var c;
  }
  k()
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
}

h()
console.log('a', a)