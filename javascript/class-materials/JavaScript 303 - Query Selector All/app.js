/////////////////// Query Selector All //////////////////////////
let x;
let dynamicListItems;


x = document.querySelector(".list-item").textContent;

x = document.querySelectorAll(".list-item")[0].textContent;

// console.log(x);

document.querySelectorAll(".list-item").forEach((list) => {
    console.log(list.textContent);
})

const y = document.querySelectorAll(".list-item").length;
console.log(y)
// Class - view in console

dynamicListItems = document.querySelectorAll(".dynamic-list-item").forEach((list , index) => {
    list.textContent = `index: ${index} = Changed Value`;
});


let z = document.querySelectorAll(".list-item");
console.log(z);

let q = [...z];
console.log(q);
// Elements - use p as an ecample

// Accessing invidual nodes

// While query selector returns an object or null query selector all ALWAYS returns a NodeList
// If the selection is not found the node list is empty

// Node lists have the following similarities to an array:
// - they have a length property
// - You can use the forEach method to iterate through them
// - You can use square brackets to access a specific node

// log the length of dynamicListItems

// Use forEach to log all the paragraphs

// Use for each to dynamically update a list

// You cannot use any other array methods on nodelists.
// To use map or filter you would need to convert the node list to an array.
// You rarely need to do this but it's worth knowing

// Convert NodeList to Array
// We will cover the spread operator later but for now this is an example of it's use​
