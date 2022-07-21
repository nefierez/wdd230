/*===== Hamburguer Menu =====*/
function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("navigationDisplay");
    document.querySelector("#closeIcon").classList.toggle("closeIconDisplay");
    document.querySelector("#hamIcon").classList.toggle("hamIconHide")
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;


/* ===== subMenu =====*/
function subMenuFunction() {
    document.querySelector("#subNavigation").classList.toggle("subNavigationDisplay");
}
const subMenu = document.querySelector("#servicesTab");
subMenu.onclick = subMenuFunction;


/*===== Footer =====*/
document.querySelector("#lastModified").innerHTML = document.lastModified;
document.querySelector("#year").innerHTML = new Date().getFullYear();