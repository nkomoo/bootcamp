/////////////////// InnerHTML, Value //////////////////////////

// Log text content vs inner HTML
let listItems = document.querySelector("#node-properties").textContent;
console.log("text content: " + listItems);
listItems = document.querySelector("#node-properties").innerHTML;
console.log("inner html: " +  listItems);
//Use text content and inner HTML to add to a div
const textInsert = document.querySelector("#add-to-me");
// textInsert.textContent = "Hello world";
textInsert.innerHTML = "<h1> Hello world </h1>";
// It's important to always use text content over inner HTML when handling form data
// Otherwise users could insert malicious code into your website!
//document.querySelector("#add-to-me").innerHTML = alert("You've been hacked!");

// In forms the input does not have a clossing tag so we use value
let firstName = document.querySelector("#fname").value;
console.log(firstNames)
