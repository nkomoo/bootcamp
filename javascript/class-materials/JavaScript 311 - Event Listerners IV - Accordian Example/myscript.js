/////////////////// Event Listeners​ III //////////////////////////

// Select the Accordian Headers
const accordianHeaders = document.querySelectorAll(".accordion-item-header");
console.log(accordianHeaders);

// Use ForEach to add event listerns which toggle the class hide.
// View CSS to see what hide does
accordianHeaders.forEach((head) => {
    head.addEventListener('click', () => {
        head.nextElementSibling.classList.toggle('hide');
    })
})