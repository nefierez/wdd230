/* ===== Hamburguer Menu =====*/
function toggleMenu() {
    document.querySelector("#hamIcon").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("open");
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;