/* Create a function called calculator which takes three arguments
Check the first and third arguments are numbers. If they are not numbers, log an error to the console
Check the second argument is a string of either +, -, * or  /. If it is not log an error to the console.
Use if and else statement to perform the correct calculation and return the correct answer depending on the second argument
Try Console logging your calculator function with different arguments and see what happens. */


function calculator(num1, num2, operator){
if (operator === "+") return num1 + num2;
if (operator === '-') return num1 - num2;
if (operator === '*') return num1 * num2;
if (operator === '/') return num1 / num2;
	return "something went wrong";
}
console.log(calculator(12, 10, "+"));
console.log(calculator(4, 3, "*"));
}

// OR


function calculator(num1,num2,operator){
  if(operator === '-')
    return num1 - num2
  else if(operator === '+')
    return num1 + num2
  else if(operator === '*')
    return num1 * num2
}

console.log(calculator(10, 20, '-'));
