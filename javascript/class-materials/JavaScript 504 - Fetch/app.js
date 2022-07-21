/////////////////// Fetch //////////////////////////
// see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

// API - Application Programming Interface
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// fetchPromise.then((response) => [
//   console.log(response.status)
// ]);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((json) => {
    console.log(`Name: ${json[0].name}`);
    console.log(`Length: ${json.length}`);
    for (let index = 0; index < json.length; index++) {
      const element = json[index].name;
      console.log(`${index} : ${element}`);

    }
  })
})

// fetchPromise.then((response) => {
//   if(!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`)
//   }
//   return response.json();
// }).then((json) => {
//   console.log(json[0].name);
// }).catch((error) => {
//   console.log(`Could not get any : ${error}`);
// })
