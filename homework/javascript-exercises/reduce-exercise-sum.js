// 1. Create an array , numArray/numberArray, with a list of 5 or more numbers
// 2. Create a function called sum which takes in an array as a parameter
// 3. The function should return the sum of the array.
// 4. Test the function with the array you created


const array = [15, 16, 17, 18, 19];

function reducer(previous, current) {
  const returns = previous + current;
  return returns;
}
 
array.reduce(reducer); //result is 85


// sum of all values of an array
let numberArray = [15, 16, 17, 18, 19].reduce(function (previousValue, currentValue) {
return previousValue + currentValue
}, 0)

console.log(numberArray); // result is 85

//arrow function
let numberArray = [15, 16, 17, 18, 19].reduce(
	( previousValue, currentValue ) => previousValue + currentValue,
	0
)
console.log(numberArray); //result is 85

//without function
let numberArray = [1, 2, 3, 4, 5];
const reduceSum = numberArray.reduce((total, current) => {
return total+current;
})
console.log(reduceSum);
