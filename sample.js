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