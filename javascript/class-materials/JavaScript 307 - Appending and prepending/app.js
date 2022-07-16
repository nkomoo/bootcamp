/////////////////// Appending and Prepending //////////////////////////
//Select Paragraph Container
const container = document.querySelector("#paragraph-container");
// Add to container using innerHTML
container.innerHTML += '<p>2. A second paragraph was added dynamically </p>'

// add "beforeend" using insertAdjacentHTML
// Put this at the buttom
container.insertAdjacentHTML("beforeend", '<p>3. The first paragraph was added dynamically </p>');
// add "afterbegin" using insertAdjacentHTML
// Put this at the top
container.insertAdjacentHTML("afterbegin", '<p>0. The first paragraph was added dynamically </p>');

// Select list container
const listContainer = document.querySelector("#list-container");
// Define an Array
const arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// USe forEach to loop through the array adding list items
arr.forEach((item, index) => {
    listContainer.insertAdjacentHTML("afterbegin", `<li> ${index+1}: ${item} </li>`)
})



