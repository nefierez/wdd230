let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 7) {
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



