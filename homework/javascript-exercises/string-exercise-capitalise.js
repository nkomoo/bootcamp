/ 1. Create a function called capitalize, that takes one parameter
// 2. The function should return "This is not a string" if the parameter passed in is not a string
// 3. If the parameter passed in is a string the function should return a capitalised word.
// Examples of inputs to outputs:
// robert => Robert
// DAVE => Dave
//Jenny => Jenny

function capitalize(text1) {

if(typeof text1 === "string"){
 console.log(text1.toUpperCase() + " -" + ` This is a string`);
} else {
console.log("This is not a string!")
}
	}
