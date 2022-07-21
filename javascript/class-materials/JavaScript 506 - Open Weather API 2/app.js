// Type a city name
// Click on search
// Make an API call using the city name
// Display the current temperature of the city.

function search(event) {
  const apiKey = "fb8ccf6479bfb6396d3471c968b19e68";
  const cityName = document.querySelector("#locInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((res) => {
      const jsonPromise = res.json();
      jsonPromise.then((data) => {
        const temperature = Math.trunc(data.main.temp) - 273;
        const description = data.weather[0].description;

        document.getElementById(
          "results"
        ).innerHTML = `<p> Temperature of <strong>${cityName}</strong> is <strong>${temperature}C</strong> and the cloud desciption is <strong>${description}</strong>`;
        document.querySelector("#locInput").value = "";
      });
    })
    .catch((err) => console.log(err));

  event.preventDefault();
}

document.querySelector("#myBTN").addEventListener("click", (event) => {
  search(event);
});
