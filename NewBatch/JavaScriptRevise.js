// console.log("hello")

// var myVariable 

// console.log("my Variable is: "+myVariable)
// myVariable = 2
// console.log("my Variable is: "+myVariable)
// myVariable = "string is here"
// console.log("my Variable is: "+myVariable)
// myVariable = true
// console.log("my Variable is: "+myVariable)
// myVariable = 1.23
// console.log("my Variable is: "+myVariable)

// let mylet

// console.log("my Variable is: "+mylet)
// mylet = 2
// console.log("my Variable is: "+mylet)
// mylet = "string is here"
// console.log("my Variable is: "+mylet)
// mylet = true
// console.log("my Variable is: "+mylet)
// mylet = 1.23
// console.log("my Variable is: "+mylet)

// const myconst = 0

// console.log("my Variable is: "+myconst)


// // myconst = 2
// // console.log("my Variable is: "+myconst)
// // myconst = "string is here"
// // console.log("my Variable is: "+myconst)
// // myconst = true
// // console.log("my Variable is: "+myconst)
// // myconst = 1.23
// // console.log("my Variable is: "+myconst)

// var statementCheck = 1
// console.log("----------------if else----------------")
// if(statementCheck == 1)
// 	console.log("I am in India")
// else if(statementCheck == 2)
// 	console.log("I am in USA")
// else if(statementCheck == 3)
// 	console.log("I am in Japan")
// else
// 	console.log("I am in Dubai")
// console.log("----------------Switch----------------")
// switch(statementCheck)
// {
// 	case 1:
// 		console.log("I am in India")
// 		break;
// 	case 2:
// 		console.log("I am in USA")
// 		break;
// 	case 3:
// 		console.log("I am in Japan")
// 		break;
// 	default:
// 		console.log("I am in Dubai")
// }

// var myArray = ["A", "B", "C", "D"]
// printArray(myArray)
// var myArray2 = ["E", "F", "G", "H"]
// printArray(myArray2)

// function printArray(tempArray)
// {
// 	for(var count=0; count< tempArray.length; count++)
// 	{
// 		console.log(tempArray[count])
// 	}
// }

// class Student
// {
// 	name;
// 	address;
// 	id;
// 	contact;

// 	constructor(name, address, id, contact)
// 	{
// 		console.log("this is constructor")
// 		this.name = name
// 		this.address = address
// 		this.id = id
// 		this.contact = contact
// 	}

// }

// var myStudent = new Student()
// console.log(myStudent)
// myStudent.name = "Aditya"
// myStudent.address = "My Address"
// myStudent.id = 1234
// myStudent.contact = 9876543210
// console.log(myStudent)

// var myStudent2 = new Student("Ayush", "My address", 12, 987656789)
// console.log(myStudent2)

// let student = {
// 	name: "Aditya",
// 	Age: 20,
// 	Email: "abc@gmail.com"
// }
// console.log(student)
// console.log(student.name)
// student.address = "My address comes here"
// console.log(student.address)

// function abc()
// {
// 	console.log("my Function ABC")
// }

// abc()

var abc = function()
{
	console.log("my Function ABC")
}

//console.log(abc)
//console.log(abc())

//console.log(function(){console.log("my Function ABC")})//

console.log(function(){console.log("my Function ABC")}())//

console.log("this is my String "+abc+" !")

var y = 104

if(y%2 == 1)
{
	console.log("ODD")
}
else
{
	console.log("Even")
}


var a = 5

a += 6 // a = a + 6

var obj1 = {
	a: 5,
	b: 6
}

var obj2 = obj1

//obj2 = obj1
obj2.a = 1000

console.log(obj2.a)
console.log(obj1.a)

// if(obj2.a == obj1.a)
// {
// 	console.log("equals")
// }
// else
// {
// 	console.log("Not equals")	
// }

var myNum = 5
var myNum2 = 10

if(myNum != myNum2)
{
	console.log("Num is greater then or equal to num2")	
	//console.log("Both variable are equal")
}
else
{
	console.log("Num is not greater then or equal to num2")	
	//console.log("Both variable are not equal")
}

if((myNum < myNum2) && (myNum == myNum2))
{
	console.log("jbjueb")
}

/*
&&
AND
Returns	condition1	condition2
true	true		true
false	false		true
false	true		false
false	false		false

||
OR
Returns	condition1	condition2
true	true		true
true	true		false
true	false		true
fasle	false		false
*/

var completed = false

if(completed == false)
	completed = true
else
	completed = false

completed = !completed

var arr = ["A", "B", "C", "D", "E" ]
console.log(arr)
arr[0]
arr[1] // arr address + 1


let myArray = ["Jack","Jill",4,5,true,"John"]
myArray.forEach((element, count) =>
{
	console.log(count+"->"+element)

})

for (const [index, value] of Object.entries(myArray)) {
console.log(index, " - ", value);
}

var myObject1 = {
	1:1,
	"*":2, 
	c:3,
	d:4
}

console.log(myObject1)
console.log(myObject1.c)

myArray = myArray.map(element=>
{
	 
	// console.log(typeof element == String)
	// if(typeof element == String)
	// {
	// 	element = element+"s"
	// }
	// else if(typeof element == Number)
	// {
	// 	element = element+1
	// }
	// else if(typeof element == Boolean)
	// {
	// 	element = !element
	// }

	element = element+1
	return element	
})

console.log("updated array = "+myArray)







