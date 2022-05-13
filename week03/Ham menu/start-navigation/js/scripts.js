function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburguer").classList.toggle("open");
}
const x = document.querySelector("#hamburguer");
x.onclick = toggleMenu;