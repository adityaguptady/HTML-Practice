console.log("Hello world")

let myVar1 = 10
console.log(myVar1)

myVar1 = 12
console.log(myVar1)

myVar1 = "Hello variable"
console.log(myVar1)

myVar1 = 'A'
console.log(myVar1)

myVar1 = true
console.log(myVar1)

var myVar2 = 10
console.log(myVar2)

myVar2 = 12
console.log(myVar2)

myVar2 = "Hello variable"
console.log(myVar2)

myVar2 = 'A'
console.log(myVar2)

myVar2 = true
console.log(myVar2)

const myVar3 = 10
console.log(myVar3)

//myVar3 = 12
console.log(myVar3)

//myVar3 = "Hello variable"
console.log(myVar3);

//myVar3 = 'A'
console.log(myVar3)

//myVar3 = true
console.log(myVar3)
console.log("------------------------------")
console.log("Entering traffic Signal")
console.log("------------------------------")

var trafficSignalCounter = 2

if(trafficSignalCounter == 1)
{
	console.log("Green")
}
else if(trafficSignalCounter == 2)
{
	console.log("Yellow")
}
else if(trafficSignalCounter == 3)
{
	console.log("Red")
}
else
{
	console.log("Default")
}

switch(trafficSignalCounter)
{
	case 1:
		console.log("Green")
		break
	case 2:
		console.log("Yellow")
		break
	case 3:
		console.log("Red")
		break
default:
	console.log("Default")
}



for(var conditionCheck = 0; conditionCheck<=3; conditionCheck++)
{
	for(var tempconditionCheck = 0 ; tempconditionCheck<=conditionCheck; tempconditionCheck++)
	{
		console.log("*")
	}
}
var conditionCheck = 0
while(conditionCheck<=3)
{
	console.log("#")
	conditionCheck++;
}

function checkEven(variable)
{
	if(variable % 2 == 0)
	{
		//console.log("Even")
		return "Even"
	}
	else
	{
		//console.log("Odd")
		return "Odd"
	}
}

var result = checkEven(8)
 console.log(result)


function addVariables(variable1, varable2)
{
	return variable1 + varable2
}

console.log("The sum of 2 & 3 is: "+addVariables(2,3))

function mergeStrings(string1, string2)
{
	return string1+" "+string2
}

console.log("Merged string for 2 strings is: ",mergeStrings("Divyansh", "Chouhan"))

class Student
{
	name
	rollNo
	Id
	phoneNumber
	address

	constructor(name, rollNo, Id, phoneNumber, address)
	{
		this.name = name
		this.rollNo = rollNo
		this.Id = Id
		this.phoneNumber = phoneNumber
		this.address = address
	}
}

let st = new Student()
console.log(st)
st.name = "Nikita"
st.rollNo = 102
st.Id = 112
st.phoneNumber = 9876543210
st.address = "Address line comes here"
console.log(st)
console.log("Name of student is: "+st.name)

let st1 = new Student("Aditya Soni", 103, 113, 987654345, "Address comes here")
console.log(st1)

let st2 = new Student("Aditya Gupta")
console.log(st2)

st2.ssiId = 111
console.log(st2.ssiId)
console.log(st)
console.log(st1)
console.log(st2)

let student = {}
console.log(student)

student.name = "abc"
student.rollNo = 199
student.Id = 190
student.phoneNumber = 7898767876
student.address = "gfhfhi"
student.getName = function()
{
	console.log("This is samle")
}

console.log(student)
console.log(student.getName())

(function (){
	console.log("Hello there")
})()