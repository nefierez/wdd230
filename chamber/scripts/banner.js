let d = new Date().getDay();

const banner = document.querySelector("#banner");
if (d === 1 || d === 2) {
    banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
});


/*const date = new Date();
const dayName = date.toLocaleString('en', { weekday: 'long'});
const dayNumber = date.toLocaleString('en', { day: 'numeric' });
const month = date.toLocaleString('en', { month: 'long'});
const year = date.getFullYear();

const fullDate = `Today is ${dayName}, ${month} ${dayNumber}, ${year}`;
document.querySelector("#date").innerHTML = fullDate;*/