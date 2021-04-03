class Fetch {
    async getData(location){
        const MY_KEY = "d49cc0dfd8837f8bf387ee4b861273fb";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${MY_KEY}`
        );

        const data = await response.json();

        const reresponse = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${MY_KEY}&units=imperial`
        );

        const dadata = await reresponse.json();
        console.log(dadata);

        return dadata;
    }
}
