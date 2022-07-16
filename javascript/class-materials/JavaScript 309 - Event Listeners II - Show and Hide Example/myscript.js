/////////////////// Event Listeners​ II //////////////////////////

// classList add & remove
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const collapsibleContentOpen = document.querySelector(
  "#collapsible-content-open"
);



openButton.addEventListener("click", () => {
  collapsibleContentOpen.classList.remove('hide');
})

closeButton.addEventListener("click", () => {
  collapsibleContentOpen.classList.add('hide');
})
// classList - toggle

const toggleButton = document.querySelector("#toggle-reveal");
const collapsibleContentToggle = document.querySelector(
  "#collapsible-content-toggle"
);

toggleButton.addEventListener("click", () => {
  collapsibleContentToggle.classList.toggle('hide');
})

