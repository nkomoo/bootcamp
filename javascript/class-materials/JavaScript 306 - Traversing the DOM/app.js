/////////////////// Traversing the DOM //////////////////////////

// As a rule we should avoid traversing the DOM and instead insert and remove classes
// This is because if we insert elements into the DOM our code which traverses the DOM can break

// However sometimes it is useful

let x;

const list = document.querySelector("ul");
const main = document.querySelector("main");
const listItem3 = document.querySelector("#item-3");

// Get Child nodes of Main
x = list.children[0].textContent;


list.children[0].textContent = 'Amazon'
// Get Children of List
x = listItem3.parentNode;
x = listItem3.parentElement;
// Change text content of a child of list

// Get parent nodes of list item 3

// Get parent of parent of list item 3
x = listItem3.parentElement.parentElement;
// Get Siblings of list item 3
x = listItem3.nextElementSibling
console.log(x);