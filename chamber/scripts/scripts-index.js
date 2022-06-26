/* ===== Banner =====*/
let d = new Date().getDay();
const close = document.querySelector("#close");

const banner = document.querySelector("#banner");
if (d === 1 || d === 2) {
    banner.style.display = "block";
}

close.addEventListener("click", () => {
    banner.style.display = "none";
});



/* ===== Weather =====*/
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



/* ===== Spotlights =====*/
const URLrequest = 'https://nefierez.github.io/wdd230/chamber/scripts/data.json';
const containers = document.querySelector(".light-container");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
    let businessCard = document.querySelector(".box");
    let logo = document.querySelector(".companyLogo");
    let name = document.querySelector(".companyName");
    let phone = document.querySelector(".companyPhone");
    let email = document.querySelector(".companyEmail");
    let membership = document.querySelector(".companyMembership");
    let website = document.querySelector(".companyWebsite");

    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', `${company.name}'s logo`);
    name.textContent = company.name;
    phone.textContent = company.phone;
    email.textContent = company.email;
    membership.textContent = company.membership;
    website.innerHTML = `<a href="${company.url}" target="_blank">Commerce Website</a>`;

    containers.appendChild(businessCard);
}