// 1. Create an array, studentGrades, with the values 70, 20, 53, 64, 78, 60, 32
// 2. Create a function called passedGrades. The function should take in an array and return an array of the scores above 50.

// draft
function name(params) {
let arr = [];
params.forEach((item) => {
if(item > 50) {
arr.push(item);
}
})
return arr;
}

// Answer using filter
let arr = [70, 20, 53, 50, 64, 78, 60, 32];
const filteredArray = studentGrades.filter((score) => score >= 50);
console.log(filteredArray);

//answer using forEach

function passedGrades(arr){
let i = [];
arr.forEach((item) => {
if (item > 50) {
i.push(item)
}
})
return i;
}
console.log(passedGrades([70, 20, 53, 50, 64, 78, 60, 32]));
