// 1. Create an array , numArray, with a list of 5 or more numbers
// 2. Create a function called sum which takes in an array as a parameter
// 3. The function should return the sum of the array.
// 4. Test the function with the array you created

const numArray = [1, 2, 3, 4, 5];

function sum(arr){
let addition = 0;
arr.forEach((numbers) =>{
addition = numbers + addition
})
return addition;
}
console.log(sum(numArray)); //15
