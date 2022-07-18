/* ===== Weather =====*/
const weatherAPI = "7e20a56af3f2f5b94bf18ff525aa7576";

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.6349&lon=90.5069&units=metric&appid=${weatherAPI}`)
    .then((weatherURL) => weatherURL.json())
    .then((data) => {

        const temp = data.current.temp.toFixed(0);
        const description = data.current.weather[0].description.toUpperCase();
        const humidity = data.current.humidity;
        
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`);
        weatherIcon.setAttribute('alt', description);
        document.querySelector("#currentTemperature").innerHTML = temp;
        document.querySelector("#currentHumidity").innerHTML = humidity;
        document.querySelector("#weatherDescription").innerHTML = description;
});