/////////////////// Storage  //////////////////////////

// This is how you get the data out of LocalStorage

// This is how you get the data out of SessionStorage

// clear/resetting the input value

// Set Selectors to variables
const form  = document.querySelector("#form");
const emailAddress = document.querySelector("#emailAddress");
const password = document.querySelector("#password");

// Variable to catch the data

// Event listening to the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    sessionStorage.setItem('email', emailAddress.value);
    sessionStorage.setItem('password', btoa(password.value));
    
})
// Local Storage


// form.addEventListener('submit', (event) => {
//     exampleInput.value = userName;
//     event.preventDefault();
// })


// Session Storage
