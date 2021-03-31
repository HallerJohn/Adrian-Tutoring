class UI {
    constructor(){
        this.cityName = document.querySelector(".name");
        this.currentTemp = document.getElementById('Temperature');
        this.currentHumidity = document.getElementById('Humidity');
        this.currentWindSpeed = document.getElementById('Wind Speed');
        this.currentUVIndex = document.getElementById('UV Index');
        this.iconURL = '';
        this.date= '';
    }

    setName(city){
        
    }

    populateUI(data, city){
        var date = new Date(data.current.dt * 1000).toLocaleDateString();

        var iconPath = data.current.weather[0].icon;
        this.iconURL = `https://openweathermap.org/img/wn/${iconPath}@2x.png`;

        this.cityName.innerHTML = city + " " + date + `<img src=${this.iconURL}>`;

        this.currentTemp.textContent = data.current.temp;
        this.currentHumidity.textContent = data.current.humidity;
        this.currentWindSpeed.textContent = data.current.wind_speed;
        this.currentUVIndex.textContent = data.current.uvi;
    }
}
