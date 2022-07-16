/////////////////// Spread Operator //////////////////////////
const shoppingBill = [5, 17.5, 12];
const newItemsBill = [3, 7, 8];

// if i do  [shoppingBill,3,7,8] i get array in an array unless i do  [...shoppingBill,3,7,8]

function sum(a, b, c) {
  return a + b + c;
}

// log sum with the parameter of shoppingBill using the spread operator

console.log(sum(...shoppingBill))

const totalArr = [...shoppingBill, ...newItemsBill]

console.log(totalArr)
// Add arrays using spread operator to create a new array

// Creating a copy of an array using the spread operator

const newShoppingBill = [...shoppingBill];
// By reference vs by value example

// Objects - Spread operator used to combine 2 (or more) objects

let obj = { first: 'Joe'};
let obj1 = { last : 'Davis'};

console.log({...obj, ...obj1})
/////////////////// Destructoring //////////////////////////

const hero = {
  charName: "Batman",
  realName: "Bruce Wayne",
  dob: new Date("1915-04-17"),
  mobile: "079123 456 789",
  address: "Wayne Manor, Gotham",
};

// The standard way to assign properties to new variables

// const charName = hero.charName;
// const realName = hero.realName;
// const mobile = hero.mobile;
// const dob = hero.dob;
// const addr = hero.address;

// We can use destructoring to do this with much less code
const {charName, realName, dob} = hero;

const student1 = ['James', 'Joe', 'Davis'];
const student2 = ['Jessica', 'Lola', 'Dele', 'John', 'Jackson'];

const totalStudents = [...student1, ...student2];


let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {yearNeptuneDiscovered, ...discoveryYears} = planetFacts;

console.log(discoveryYears);


function getUserData({firstName='Femi', favoriteColor="green"}){
  return console.log(`Your name is ${firstName} and you like ${favoriteColor}`);
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
getUserData({favoriteColor: "Melissa"}) // ?
getUserData({})
