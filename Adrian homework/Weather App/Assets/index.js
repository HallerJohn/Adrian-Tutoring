var citySearch = document.querySelector(".city-search");
var searchBTN = document.querySelector(".search-button");

var clearBTN = document.querySelector(".clear-history-button");
var historyContainer = document.querySelector("history-container");
var searchHistory = [];

var cityName = document.querySelector(".name");
var currentTemp = document.getElementById("temperature");
var currentHumid = document.getElementById("humidity");
var currentWindSpeed = document.getElementById("wind-speed");
var currentUVIndex = document.getElementById("UV-index");

const API_KEY = "d49cc0dfd8837f8bf387ee4b861273fb";

searchBTN.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citySearch.value + "&appid=" + API_KEY)
    .then(response => response.json())
    .then(data => {
        cityName.textContent = data['name'];
        var lon = data['coord']['lon'];
        var lat = data['coord']['lat'];
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=imperial")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var date = new Date(data['current']['dt']*1000).toLocaleDateString();
            cityName.textContent += " " + date;

            currentTemp.textContent = data['current']['temp'] + "°F";
            currentHumid.textContent = data['current']['humidity'] + "%";
            currentWindSpeed.textContent = data['current']['wind_speed'] + "mph";
            currentUVIndex.textContent = data['current']['uvi'];
        })
    })
})

function getUVI(){
    fetch("https://api.openweathermap.org/data/2.5/uvi?q=" + citySearch.value + "&appid=" + API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
