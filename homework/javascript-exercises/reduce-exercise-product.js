// 1. Create a function called product that multiplies all the numbers in the array by each other.
// 2. Test the function by passing in your array of values

let numberArray = [15, 16, 17, 18, 19];

function product(previous, current){
const returns = previous * current;
  return returns;
}

numberArray.reduce(product); //result is 1395360


//arrow function
let numberArray = [15, 16, 17, 18, 19].reduce(
	( previousValue, currentValue ) => previousValue * currentValue,
	1
)
console.log(numberArray); //result is 1395360
