class User {
  constructor(firstName, lastName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
}

class AllFunctions {
  static displayusers() {
    const users = Database.getUsers();

    users.forEach((user) => {
      AllFunctions.addUserToList(user);
    });
  }

  static addUserToList(user) {
    const list = document.querySelector("#user-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.emailAddress}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>`;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#emailAddress").value = "";
  }

  static deleteUser(target) {
    if(target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }
}

document.addEventListener("DOMContentLoaded", AllFunctions.displayusers);

document.querySelector("#user-form").addEventListener("submit", (event) => {
  // Prevent the default behaviour of the submit button
  event.preventDefault();

  //Get data from form input
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const emailAddress = document.querySelector("#emailAddress").value;

  const isEmailExists = Database.getUsers().find(
    (user) => user.emailAddress === emailAddress
  );

  if (firstName === "" || lastName === "" || emailAddress === "") {
    alert("Please fill in all fields");
  } else if (isEmailExists) {
    alert("Email Exists");
  } else {
    const user = new User(firstName, lastName, emailAddress);

    AllFunctions.addUserToList(user);
    Database.addUser(user);
    AllFunctions.clearFields();
  }
});


document.querySelector('#user-list').addEventListener('click', (e) => {
  AllFunctions.deleteUser(e.target);
  Database.removeUser(e.target.parentElement.previousElementSibling.textContent);
})

class Database {
  //Get all users from local storage;
  static getUsers() {
    let users;

    if (!localStorage.getItem("users")) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
  }

  static addUser(user) {
    const users = Database.getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  static removeUser(email) {
    const users = Database.getUsers();

    users.forEach((user, index) => {
      if(user.emailAddress === email) {
        users.splice(index, 1);
      }
    })
    localStorage.setItem("users", JSON.stringify(users));
  }
}
