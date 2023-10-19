console.log("Hello SSI")

console.log("Addition : 5 + 3 = "+(5+3))

let myFirstString = "String"
let mySecondString = "Contacenation"
console.log(myFirstString)
console.log(mySecondString)
console.log(myFirstString + mySecondString)
console.log(myFirstString + " " +mySecondString)

let a = 2
let b = 4
let c = b**a
console.log("c = "+c)

let d = 5
let e = 2
let f = d%e
console.log("f = "+f)


let variable1 = 2
let variable2 = 2.0
console.log(variable1 === variable2)

//a > b
//a < b

let myArray = ["Atif", "SSi", "MERN", 1, 2, true]
console.log(myArray)
var index = 0;
myArray.forEach(element =>{
	console.log(index)
	console.log(element)
	index++
	//all the oprerations related to
	//the element can be done here
})

//["Atif", "SSi", "MERN", 1, 2, true]
for(const [index, value] of Object.entries(myArray))
{
	console.log("index: "+index+", value: "+value)
}


//Map
console.log("------------------Map------------------")
let myMap = new Map()
myMap.set(1,"Aditya")
myMap.set(2,"Pragya")
myMap.set(3,"Salman")

myMap.forEach((value, key)=>
{
	console.log("key: "+key+", value: "+value)
})

//String functions
console.log("------------------String functions------------------")
var myStringVariable = "Abcdefghijkl"
var length = myStringVariable.length
console.log("Length of the sting is: "+length)

let myArrayVar = myStringVariable.split("f")
console.log(myArrayVar[1])

var myStringVariable2 = "My Name is Aditya Gupta"
let myArrayVar2 = myStringVariable2.split(" ")
console.log(myArrayVar2)

console.log("charAt(8): "+myStringVariable2.charAt(8))
console.log("replace('a', 'Z'): "+myStringVariable2.replace('a', 'Z'))
console.log("replaceAll(\"Name\", \"Star\"): "+myStringVariable2.replaceAll("Name", "Star"))
console.log("substring(4, 8): "+myStringVariable2.substring(4, 8))
console.log("startsWith(\"My\"): "+myStringVariable2.startsWith("My"))
console.log("endsWith(\"ta\"): "+myStringVariable2.endsWith("ta"))

var myNumbers = [11, 22, 11, 44, 55, 11, 77]
console.log("My Array is: "+myNumbers)
console.log(myNumbers)

console.log("my New array with push is: "+myNumbers.push(88))
console.log(myNumbers)

console.log("my New array with pop is: "+myNumbers.pop())
console.log(myNumbers)


console.log("my New array with lastIndexOf is: "+myNumbers.lastIndexOf(11))
//console.log(myNumbers)

console.log("my New array with entries is: "+myNumbers.entries())
console.log(myNumbers.entries())

//find method for Array
let myArryavar3 = ["Mercury", "Venus", "Earth", "Mars"]
console.log(myArryavar3)
let found = myArryavar3.find(element=>
{
	return element.includes('s')
})
console.log("result after finding element including s character: "+found)

let myarr = ["Mercury","Venus","Earth","Mars"]; 
let filtered = myarr.filter(val=>
{
	if(val.length <= 4)
		return true
	else
		return false
	//return ;
}) 
console.log(filtered);

let numberArray = [1, 2, 3, 4, 5]
console.log(numberArray);
let newNumberArray = numberArray.map(val=>
{
	return val+1;
})
console.log(newNumberArray);

let numberArray2 = ["ABC", "DEFG", "HIJKL", "MNOPQR"]
console.log(numberArray2);
let newNumberArray2 = numberArray2.map(val=>
{
	if(val.length >=4)
	{
		return val+"ed"
	}
	else
	{
		return val
	}
})
console.log(newNumberArray2);

console.log(numberArray2.concat(numberArray))

//Maps
var myMap1 = new Map()
console.log("---------------Map------------")
console.log(myMap1)
myMap1.set(1, "One")
myMap1.set(2, "Two")
myMap1.set(3, "Three")
myMap1.set(4, "Four")
myMap1.set(5, "Five")
console.log(myMap1)
console.log("getting 2 keyed value from map")
console.log(myMap1.get(2))

console.log("Getting all the keys from Map")
console.log(myMap1.keys())

console.log("Getting all the values from Map")
console.log(myMap1.values())

console.log("Calling has from map")
console.log(myMap1.has(2))
console.log(myMap1.has(6))

console.log("Deleting 4 from map")
console.log(myMap1.delete(4))
console.log(myMap1)


