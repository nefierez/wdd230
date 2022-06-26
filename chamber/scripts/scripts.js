function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("open");
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;

/* ===========================================================================================*/

const date = new Date();
const dayName = date.toLocaleString('en', { weekday: 'long'});
const dayNumber = date.toLocaleString('en', { day: 'numeric' });
const month = date.toLocaleString('en', { month: 'long'});
const year = date.getFullYear();

const fullDate = `${dayName}, ${dayNumber} ${month} ${year}`;
document.querySelector("#date").innerHTML = fullDate;

/* ===========================================================================================*/

document.querySelector("#lastModified").innerHTML = document.lastModified;
document.querySelector("#year").innerHTML = new Date().getFullYear();
