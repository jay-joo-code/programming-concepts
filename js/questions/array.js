/* Q: QWrong output? */

const myArray = new Array(2)

console.log(myArray.length)

myArray[0] = 0

console.log('myArray', myArray)

myArray[1] = 1
console.log('myArray', myArray)

myArray[3] = 3

console.log('myArray', myArray)

console.log(myArray.length)

for (const elt of myArray) {
  console.log(elt)
}
