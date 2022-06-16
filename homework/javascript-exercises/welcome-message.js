// 1. Create a function called welcome. The function should take two parameters: firstName and lastName
// 2. The function should return the string `Hello firstName lastName, how can I help you?`
// 3. Try console logging the function with your name as a parameter
// 4. Finally modify the function so that the firstName is in lower case but the lastNames is in all capital letters

function welcome(firstName, lastName) {
    return `Hello ${firstName} ${lastName}, how can I help you?`; 
}

console.log(welcome("Chantele".toLowerCase(), "Nkomo".toUpperCase()));

