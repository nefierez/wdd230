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