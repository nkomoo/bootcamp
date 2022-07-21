/////////////////// Open Weather API //////////////////////////
// **** Before we get started **** \\
/*
Until you get comfortable with your code what are the first things you should to make sure everything is working correctly??
*/

// ---- Setting Up API Account ---- \\

// Create an Account: https://home.openweathermap.org/users/sign_up
// !!!!!!!!!! Make sure to go to emails and verify your account !!!!!!!!!!!!

// Where to access the API: https://openweathermap.org/api

// Need to get your API Key

// Get JSON extention for Chrome formatter -- https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

// Set the data to a variable

// ==== Example ==== \\

// ----------------------------------------------------------------------------------------------
// Step 1 - View JSON in the browser
const cityName = "Barcelona";
const countrycode = "uk";
const lattitude = 35;
const longitude = 139;
const apiKey = "fb8ccf6479bfb6396d3471c968b19e68";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countrycode}&appid=${apiKey}`;
const apiUrl3 = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}`
console.log(apiUrl3);

fetch(apiUrl3).then((response) => {
  const jsonData = response.json();

  jsonData.then((json) => {
    console.log(json.wind.speed);
    document.querySelector("h2").textContent = `The city of ${json.name}`;
    document.querySelector(
      "p"
    ).textContent = `The speed of the wind is ${json.wind.speed}`;
  });
}).catch((error) => {
  console.log(`An error occured: ${error}`)
});

// Paste the URL in the console into browser and the JSON extension will allow you to see the JSON data
// Example = http://api.openweathermap.org/data/2.5/weather?q=London&appid=8826c10064648be786a4fc5a7a965748
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Step 2 - Print the data into the DOM

// ----------------------------------------------------------------------------------------------
