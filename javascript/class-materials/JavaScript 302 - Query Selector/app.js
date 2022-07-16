/////////////////// Query Selector //////////////////////////
let x;

// Query Selectors use CSS selectors to select an element on a page
// Query Selectors return an object that represents an HTML element from the page​

// Selecting an element
x = document.querySelector("h1").textContent = "This changed!!!";
console.log(x);
// Selecting an id
x = document.querySelector("#Intro");
// Selecting a class. Note it will only select the first instance of the class on the page
x = document.querySelector(".list-item").textContent;
console.log(x);
x = document.querySelector(".list-item");
console.log(x);
// Combining Selectors - You can use any valid CSS selectors

// Text Content

// Dynamically changing the text content with text content

// If the element does not exists it will return null
// If you think it might return null you can use optional chaining or an if statement to stop it breaking.

// Selecting an id which might not exist with optional chaining
// x = document.querySelector("#something").textarea;

// In the past we used getElementByID. While you can still use that we recommend using querySelector
// We do not recommend using getElementsByClassName() or getElementsByTagName()
