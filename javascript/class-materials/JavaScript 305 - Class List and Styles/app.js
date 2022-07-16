/////////////////// Class List and Style //////////////////////////

//////// classList ///////
// We can add remove and toggle classes using classList
// Note unlike query selector we don't use a "." as the values are ALL classes

// Select the h1 element

// Add the green class

// Remove the green class
// pageHeader.classList.remove("green");

//To add classes to a node array we need to use forEach. Here we add the class purple

//////////////  Style   //////////////
// You should use the style sheet to set non dynamic CSS
// In generel if you need to change CSS with JavaScript you should use class List
// However occasionaly we wont to set it directly and this is how!

// Select button

// Set display to ""

// Change background color, color and font size

// Set the display property back to none
// button.style.display = "none";

const r = document.querySelector("#node-properties");
r.innerHTML = "<li>Inner HTML: if you need the HTML</li> <li>Value: for forms</li> <li>Text content: general ussage</li>"
let favFood = [1,2,3,4,5];
let f = document.querySelector("#dynamicContent");

favFood.forEach((item) => {
    f.innerHTML += `<li> ${item} </li>`;
})


document.querySelector("h1").classList.add("green");

document.querySelectorAll("li").forEach((list) => {
    if(list.textContent.length < 17) {
        list.classList.add("purple");
    } else {
        list.classList.add("red");
    }
})


let button = document.querySelector("button");

button.style.display = "inline-block";
button.style.color = "#000000";
button.style.backgroundColor = "green";
button.style.padding = "10px 10px";
button.style.fontSize = "15px";
button.style.borderRadius = "5px";


document.querySelector("body").classList.add("dark-mode")