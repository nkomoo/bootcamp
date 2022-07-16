/////////////////// JSON //////////////////////////
// ---- JSON Section ---- \\
// ==== Example 1 ==== \\
// Example of the data (not used in workings)
// This is what JSON looks like (name/value pairs):
//  {"name":"John", "age":30, "city":"New York"}

// // stringify() - used to turn an object into a JSON object
let myObj = { name: "John", age: 38 };
let stringify = JSON.stringify(myObj);
console.log("stringify: " + stringify);
// // parse() - used to turn a JSON into an object
const json = '{"name":"John", "age":30, "city":"New York"}';
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
// ---- JSON Example (Don't just show to the students build up example slowly so they can see how what we have learnt comes together) ---- \\
// ==== Example 2 ==== \\
let users =
  '[{"firstName": "Dele", "age": 10},{"firstName": "Dele", "age": 10},{"firstName": "Dele", "age": 10}]';

console.log(users);
const userObj = JSON.parse(users);
console.log(userObj);
// ---- How to create a local JSON file ---- \\
// ==== Example 3 ==== \\
// We will cover fetch in the next lesson

fetch("./_data/Data13-ClassExample.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
