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


let d = new Date().getDate();

const banner = document.querySelector("#banner")
if (d === 1 || d === 2) {
    banner.style.display = "none";
}

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("#click", () => {
    banner.style.display = "none";
});