const API = "7e20a56af3f2f5b94bf18ff525aa7576";

const fetchData = position => {
  const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${API}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
  console.log(data);
  const weatherData = {
    temperature: data.main.temp,
    speed: data.wind.speed,
  }
  Object.keys(weatherData).forEach(key => {
    document.getElementById(key).textContent = weatherData[key];
});
}

//let parseFloat('windChill') = 35.74 + 0.6215 * temperature -35.75 * Math.pow(speed,0.16) + 0.4275 * temperature * Math.pow(speed,0.16);
//console.log(windChill);
//document.querySelector("#windChill").textContent = windChill;

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
}


/*
if (temperature <= 50 && speed > 3) {
  windchill = windChill(temperature, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#windChill").innerHTML = windchill;

function windChill(temp, speed) {
  return "SUCCESS";
}
*/