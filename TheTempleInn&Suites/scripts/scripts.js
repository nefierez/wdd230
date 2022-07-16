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

        let minTemp1 = data.daily[1].temp.min.toFixed(0);
        let maxTemp1 = data.daily[1].temp.max.toFixed(0);
        let description1 = data.daily[1].weather[0].description.toUpperCase();
        
        weatherIcon1.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`);
        weatherIcon1.setAttribute('alt', description1);
        document.querySelector(".highest").innerHTML = minTemp1;
        document.querySelector(".lowest").innerHTML = maxTemp1;
        document.querySelector(".weatherDescription").innerHTML = description1;
});

/* ===== Current Date =====*/