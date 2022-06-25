// 1. Create an array Kilometers with 5 or more values.
// 2. Create a function called toMiles which returns a new array of the kilometers array converted miles.
// 3. You should use map in the function body
//    1 mile = 0.621371km

let kilometers = [1, 2, 3, 4, 5];

function toMiles(newArr){
let mappedArray = kilometers.map((score) => {
return score / 1.609;
})
}
console.log(mappedArray);

// second try 

function toMiles(arr){
let newArr = kilometers.map((score) => {
return score / 1.609;
})
return newArr;
}
console.log(toMiles([1, 2, 3, 4, 5]));
