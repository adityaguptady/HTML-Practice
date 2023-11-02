console.log("hello")

var myVariable 

console.log("my Variable is: "+myVariable)
myVariable = 2
console.log("my Variable is: "+myVariable)
myVariable = "string is here"
console.log("my Variable is: "+myVariable)
myVariable = true
console.log("my Variable is: "+myVariable)
myVariable = 1.23
console.log("my Variable is: "+myVariable)

let mylet

console.log("my Variable is: "+mylet)
mylet = 2
console.log("my Variable is: "+mylet)
mylet = "string is here"
console.log("my Variable is: "+mylet)
mylet = true
console.log("my Variable is: "+mylet)
mylet = 1.23
console.log("my Variable is: "+mylet)

const myconst = 0

console.log("my Variable is: "+myconst)


// myconst = 2
// console.log("my Variable is: "+myconst)
// myconst = "string is here"
// console.log("my Variable is: "+myconst)
// myconst = true
// console.log("my Variable is: "+myconst)
// myconst = 1.23
// console.log("my Variable is: "+myconst)

var statementCheck = 1
console.log("----------------if else----------------")
if(statementCheck == 1)
	console.log("I am in India")
else if(statementCheck == 2)
	console.log("I am in USA")
else if(statementCheck == 3)
	console.log("I am in Japan")
else
	console.log("I am in Dubai")
console.log("----------------Switch----------------")
switch(statementCheck)
{
	case 1:
		console.log("I am in India")
		break;
	case 2:
		console.log("I am in USA")
		break;
	case 3:
		console.log("I am in Japan")
		break;
	default:
		console.log("I am in Dubai")
}

var myArray = ["A", "B", "C", "D"]
printArray(myArray)
var myArray2 = ["E", "F", "G", "H"]
printArray(myArray2)

function printArray(tempArray)
{
	for(var count=0; count< tempArray.length; count++)
	{
		console.log(tempArray[count])
	}
}

class Student
{
	name;
	address;
	id;
	contact;

	constructor(name, address, id, contact)
	{
		console.log("this is constructor")
		this.name = name
		this.address = address
		this.id = id
		this.contact = contact
	}

}

var myStudent = new Student()
console.log(myStudent)
myStudent.name = "Aditya"
myStudent.address = "My Address"
myStudent.id = 1234
myStudent.contact = 9876543210
console.log(myStudent)

var myStudent2 = new Student("Ayush", "My address", 12, 987656789)
console.log(myStudent2)

let student = {
	name: "Aditya",
	Age: 20,
	Email: "abc@gmail.com"
}
console.log(student)
console.log(student.name)
student.address = "My address comes here"
console.log(student.address)











