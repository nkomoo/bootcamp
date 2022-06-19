/* Information

The first year of a dog's life is equal to 15 human years
The second year of a dog's life is equal to 9 human years
Each additional year is equal to about 5 human years



Instructions
1. Use your age and name variables
2. Calculate your age in dog years using JavaScript maths operators
3. Console log your age in dog years using template literals */

// this is my age and name
let myAge = 23;
let myName = "Chantele";

const earlyYears = myAge - 2;

//2nd year of dog is equal to 9 human years
if (myAge <= 2){
	console.log(myAge * 9);
}

//after that each dog year is 5 human years

else if(myAge > 2){
console.log(myAge + earlyYears * 5);
