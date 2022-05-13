function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
}
const x = document.querySelector("#hamburguer");
x.onclick = toggleMenu;