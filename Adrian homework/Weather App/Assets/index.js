// Store the elements related to the city search.
var citySearch = document.querySelector(".city-search");
var searchBTN = document.querySelector(".search-button");

// Store the elements related to the search history.
var clearBTN = document.querySelector(".clear-history-button");
var historyContainer = document.querySelector("history-container");
var searchHistory = [];

// Store the elements related to the current city/weather.
var cityName = document.querySelector(".name");
var currentTemp = document.getElementById("temperature");
var currentHumid = document.getElementById("humidity");
var currentWindSpeed = document.getElementById("wind-speed");
var currentUVIndex = document.getElementById("UV-index");

// Our key to access the openWeatherAPI.
const API_KEY = "d49cc0dfd8837f8bf387ee4b861273fb";

// When the search button is clicked.
searchBTN.addEventListener("click", function(){
    // Call the API.
    // The purpose of this call is to get the name/latitude/longitude of the city.
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citySearch.value + "&appid=" + API_KEY)
    .then(response => response.json())
    .then(data => {
        // Store the name/latitude/longitude in variables.
        cityName.textContent = data['name'];
        var lon = data['coord']['lon'];
        var lat = data['coord']['lat'];
        // Make a new API call.
        // The purpose of this call is to get all the weather data.
        // Note: Some of the weather data is available from the previous call but not all of it.
        // So we need to make a different call using the coordinates.
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=imperial")
        .then(response => response.json())
        .then(data => {
            // Log all of the data from our API call.
            console.log(data);
            // Get the current date.
            var date = new Date(data['current']['dt']*1000).toLocaleDateString();
            cityName.textContent += " " + date;

            // Start retrieving all of the required weather data.
            currentTemp.textContent = data['current']['temp'] + "°F";
            currentHumid.textContent = data['current']['humidity'] + "%";
            currentWindSpeed.textContent = data['current']['wind_speed'] + "mph";
            currentUVIndex.textContent = data['current']['uvi'];
        })
    })
})
