let favFood = ["Pancake", "Oreos", "Sushi"];
console.log(favFood);
let f = document.querySelector(".dynamicContent");
console.log(f);

favFood.forEach((item) => {
f.innerHTML = `<li> ${item} </li>`;
  
})

document.body.style.backgroundColor = "black";
document.body.style.color = "white";
