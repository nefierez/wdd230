const weatherAPI = "7e20a56af3f2f5b94bf18ff525aa7576";

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${3598132}&units=imperial&lat=&lon=&appid=${weatherAPI}`)
    .then((response) => response.json())
    .then((data) => {

    const description = data.weather[0].description.toUpperCase();
    const temp = data.main.temp.toFixed(0);
    const speed = data.wind.speed;
    
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', description);

    document.querySelector("#currentTemperature").innerHTML = temp;
    document.querySelector("#currentSpeed").innerHTML = speed;
    document.querySelector("#weatherDescription").innerHTML = description;


    if (temp <= 30 && speed > 3) {
        const wc = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);
        document.querySelector("#windChill").innerHTML = wc;
    } else {
        document.querySelector("#windChill").innerHTML = "N/A"
    }
});


/*
const weatherAPI = "7e20a56af3f2f5b94bf18ff525aa7576";

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${3598132}&units=imperial&lat=&lon=&appid=${weatherAPI}`)
    .then((response) => response.json())
    .then((data) => {

    const description = data.weather[0].description.toUpperCase();

    currentTemperature.innerHTML = `${data.main.temp.toFixed(0)}`;
    currentSpeed.innerHTML = `${data.wind.speed}`;   
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', description);
    weatherDescription.innerHTML = description;

    const temp = parseFloat(currentTemperature.textContent);
    const speed = parseFloat(currentSpeed.textContent);

    const wc = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);

    if (temp <= 30 && speed > 3) {
        windChill.innerHTML = wc;
    } else {
        windChill.innerHTML = "N/A"
    }
});
*/