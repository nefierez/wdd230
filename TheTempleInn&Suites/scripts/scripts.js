/*===== Hamburguer Menu =====*/
function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("navigationDisplay");
    document.querySelector("#closeIcon").classList.toggle("closeIconDisplay");
    document.querySelector("#hamIcon").classList.toggle("hamIconHide")
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;


/* ===== subMenu =====*/
function subMenuFunction() {
    document.querySelector("#subNavigation").classList.toggle("subNavigationDisplay");
}
const subMenu = document.querySelector("#servicesTab");
subMenu.onclick = subMenuFunction;


/*===== Footer =====*/
document.querySelector("#lastModified").innerHTML = document.lastModified;
document.querySelector("#year").innerHTML = new Date().getFullYear();


/* ===== Three-days Forecast =====*/
const API = "7e20a56af3f2f5b94bf18ff525aa7576";

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.6349&lon=90.5069&units=metric&appid=${API}`)
    .then((weatherURL) => weatherURL.json())
    .then((data) => {
        console.log(data)

        let minTemp1 = data.daily[1].temp.min.toFixed(1);
        let maxTemp1 = data.daily[1].temp.max.toFixed(1);
        let description1 = data.daily[1].weather[0].description.toUpperCase();
        
        weatherIcon1.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`);
        weatherIcon1.setAttribute('alt', description1);
        document.querySelector("#highest1").innerHTML = minTemp1;
        document.querySelector("#lowest1").innerHTML = maxTemp1;
        document.querySelector("#weatherDescription1").innerHTML = description1;

        let minTemp2 = data.daily[2].temp.min.toFixed(1);
        let maxTemp2 = data.daily[2].temp.max.toFixed(1);
        let description2 = data.daily[2].weather[0].description.toUpperCase();
        
        weatherIcon2.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`);
        weatherIcon2.setAttribute('alt', description2);
        document.querySelector("#highest2").innerHTML = minTemp2;
        document.querySelector("#lowest2").innerHTML = maxTemp2;
        document.querySelector("#weatherDescription2").innerHTML = description2;

        let minTemp3 = data.daily[3].temp.min.toFixed(1);
        let maxTemp3 = data.daily[3].temp.max.toFixed(1);
        let description3 = data.daily[3].weather[0].description.toUpperCase();
        
        weatherIcon3.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`);
        weatherIcon3.setAttribute('alt', description3);
        document.querySelector("#highest3").innerHTML = minTemp3;
        document.querySelector("#lowest3").innerHTML = maxTemp3;
        document.querySelector("#weatherDescription3").innerHTML = description3;
});

/* ===== Current Date =====*/

const date = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function threeDays(day) {
    if (day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    }
    else {
        return day + date.getDay();
    }
}
document.querySelector("#day1").innerHTML = weekDay[threeDays(1)];
document.querySelector("#day2").innerHTML = weekDay[threeDays(2)];
document.querySelector("#day3").innerHTML = weekDay[threeDays(3)];