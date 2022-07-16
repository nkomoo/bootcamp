// Use query selector to select nav items and the hamburger icon
const hamburgerIcon = document.querySelector("#nav-toggle-button");
const navItems = document.querySelector("#nav-items");

// Add event listener to the hamburger Icon which toggles the class active on nav Items
// The navItems are set to display none by default at small screen sizes
// Adding the class "active" set them to display flex.

hamburgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("active");
})
