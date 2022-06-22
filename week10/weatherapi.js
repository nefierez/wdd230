const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherAPI = "7e20a56af3f2f5b94bf18ff525aa7576";

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${3598132}&units=imperial&lat=&lon=&appid=${weatherAPI}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description.toUpperCase();
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
});

