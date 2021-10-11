/* Q: What would be the output of following code ? */
var employeeId = 'b';

function Employee() {
	this.employeeId = 'a';
}
console.log(new Employee().employeeId); // a
Employee.prototype.employeeId = 'c';
Employee.prototype.JobId = 'd';
console.log(new Employee().JobId);  // d
/* instance property takes priority over object type prototype */
console.log(new Employee().employeeId); // a


/* Q: What would be the output of following code ? */

function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () => {
	console.log(this.name)
}

let personObj = {
	name: "Tony",
	print: getName1
}

personObj.print(); // Tony
personObj.getName2(); // undefined


/* Q: what does the new keyword do? QCorrect */

/* Q: value of A .. G QWrong */

class Person {}
class Employee extends person {}
class Developer extends Employee {}
const tom = new Developer();

Object.getPrototypeOf(tom) === Developer.prototype; // A
Object.getPrototypeOf(tom) === Employee.prototype; // B
Developer.isPrototypeOf(tom); // C
Developer.prototype.isPrototypeOf(tom); // D
Employee.prototype.isPrototypeOf(tom); // E
Person.prototype.isPrototypeOf(tom); // F
Object.prototype.isPrototypeOf(tom); // G

/* -- ans -- */

Object.getPrototypeOf(tom) === Developer.prototype; // A: true
Object.getPrototypeOf(tom) === Employee.prototype; // B: false
Developer.isPrototypeOf(tom); // C: false. Developer isn't a prototype. this is obviously false
Developer.prototype.isPrototypeOf(tom); // D: true
Employee.prototype.isPrototypeOf(tom); // E: true
Person.prototype.isPrototypeOf(tom); // F: true
Object.prototype.isPrototypeOf(tom); // G: true

// since tom is an instance of Developer, and it inherits from all of the following objects 
// all of the classes are in the prototype chain of tom 


/* Q:  */



