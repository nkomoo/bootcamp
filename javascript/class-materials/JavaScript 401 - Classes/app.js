/////////////////// Classes //////////////////////////

// Objects Recap
const spaceCraft = {
  model: "Light Speed 5",
  Range: 500,
  capacity: 382,
};

// Getting the keys of our object
const allKeys = Object.values(spaceCraft);
console.log(allKeys);
// ---- Classes (Constructor) - Example ---- \\

// New instance

// Now if you want to add your methods you do this inside the class

// ---- Classes  - Example ---- \\
// ** Key word this - Used to access things within that object **

// Class with methods

// New instance of class

// Methods on instance

// Getters and Setters

// Extends - (example from MDN Docs)
//name //model
let name = "Toyota";
let model = "Venza";

let name2 = "Volvo";
let model2 = "Test";

let name3 = "Benz";
let model3 = "C500";

// let object1 = {
//   name: "Toyota",
//   model: "Venza",
// };

// let object2 = {
//   name: "Volvo",
//   model: "Test",
// };

// let object3 = {
//   name: "Benz",
//   model: "C500",
// };

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  getName() {
    return this.model.toUpperCase();
  }
}

const object1 = new Car("Toyota", "Venza");
const object2 = new Car("Volvo", "Test");

class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  get area() {
    return (this.width = this.height);
  }
}

let square = new Square(10);
console.log(square.height);
console.log(square.width);
square.area = 64;
console.log(square.height);
console.log(square.width);

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal{
  constructor(name, movement) {
    super(name);
    this.movement = movement
  }

  speak() {
    console.log(`${this.name} barks, they also ${this.movement}`);
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} swims`);
  }
}

const animal = new Dog("Dog", 'Run');
animal.speak();

class Admin {
  constructor(isAdmin) {
    this.isAdmin = isAdmin;
  }
}


class User extends Admin{
  constructor(firstName, lastName, isAdmin) {
    super(isAdmin)
    this.firstName = firstName;
    this.lastName = lastName;
  }


  message() {
    console.log(`Welcome ${this.firstName} ${this.lastName}`)
  }

  checkStatus (){
    console.log(`Welcome ${this.firstName} ${this.lastName}; are you an admin? ${this.isAdmin}`)

  }
}

const user1 = new User('Joe', 'Davis', false);
user1.message();
user1.checkStatus()
