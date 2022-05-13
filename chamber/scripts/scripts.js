function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("open");
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;

document.querySelector('#date').innerHTML = new Date();