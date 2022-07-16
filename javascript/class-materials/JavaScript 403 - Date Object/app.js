import sumArrays from "./functions.js";
import { mulArrays, mulArrays10 } from "./functions.js";

/////////////////// Date Object //////////////////////////
// Note make sure you comment out each line after you have taught them
let dateVar;

// ==== create a new date ==== \\
dateVar = new Date();

// ==== format error ==== \\

// ==== methods ==== \\

// Get Full Year
const fullYear = dateVar.getFullYear();
console.log(fullYear);
// Get Month
const month = dateVar.getMonth();
console.log(month);
//Get Date
const date = dateVar.getDate();
console.log(date);
// Get Day
const day = dateVar.getDay();
console.log(day);

// To locale string
const localString = dateVar.toLocaleDateString();
console.log(localString);

// Convert a string to Date Object
// Year, Month and Day.

const newDate = new Date("2021-12-40");

console.log(newDate);


// MODULES 

const arr = [1, 2, 3, 4, 5];

console.log('Sum of arrays : ' + sumArrays(arr));
console.log('Mul of arrays : ' + mulArrays(arr));
console.log('Mul 10 of arrays : ' + mulArrays10(arr));


const todaysDate = new Date();
document.querySelector('#presentDate').innerHTML = `${todaysDate}`