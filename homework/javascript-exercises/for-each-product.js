// 1. Create a function called product that multiplies all the numbers in the array by each other.
// 2. Test the function by passing in your array of values


const numList = [2, 4, 6, 8];

function product(arr){
let multiply = 1;
arr.forEach((numbers) => {
multiply = numbers * multiply
})
return multiply;
}
console.log(product(numList)); 
