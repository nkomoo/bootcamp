/////////////////// Event Listeners​ //////////////////////////

const htmlBtn = document.querySelector("#button");

// add Evenet listener which console logs when the button is clicked
htmlBtn.addEventListener("click", () => {
    console.log('Button Clicked by Dele');
})

// Event listener which console logs the event
htmlBtn.addEventListener("click", (event) => {
    console.log(event);
})

// Event listener which console logs the current target
htmlBtn.addEventListener("click", (event) => {
    console.log(event.currentTarget);
})

// Event listener which console logs the current target text content
htmlBtn.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent);
})

// Event listener which changes button text content
htmlBtn.addEventListener("click", (event) => {
    event.currentTarget.textContent = 'I changed';
})