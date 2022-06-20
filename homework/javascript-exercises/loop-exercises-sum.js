// 1. Write a function “sumInput()” that:
// 2. Take in an array of numbers as a parameter
// 3. Returns the sum of the numbers
// 4. Try modifying the function so it returns the average

const newArr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
}
console.log(sum);
