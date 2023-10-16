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

myArray.forEach(element =>{
	console.log(element)
	//all the oprerations related to
	//the element can be done here
})

//["Atif", "SSi", "MERN", 1, 2, true]
for(const [index, value] of Object.entries(myArray))
{
	console.log("index: "+index)
	console.log("value: "+value)
}
