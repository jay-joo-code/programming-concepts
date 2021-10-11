/* TOPIC: What would be the output of following code ? */
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



/* TOPIC: What would be the output of following code ? */

function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () =>{
	console.log(this.name)
}

let personObj = {
	name: "Tony",
	print: getName1
}

personObj.print(); // Tony
personObj.getName2(); // undefined
