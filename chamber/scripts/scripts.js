let d = new Date().getDay();

const banner = document.querySelector("#banner");
if (d === 1 || d === 2) {
    banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
});

/* ===========================================================================================*/

function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("open");
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;


const date = new Date().toDateString();
document.querySelector("#date").innerHTML = date;

document.querySelector("#lastModified").innerHTML = document.lastModified;
document.querySelector("#year").innerHTML = new Date().getFullYear();


/* ===========================================================================================*/

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

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
}