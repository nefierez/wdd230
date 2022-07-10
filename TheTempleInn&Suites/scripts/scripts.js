/* ===== Hamburguer Menu =====*/
function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("navigationDisplay");
    document.querySelector("#closeIcon").classList.toggle("closeIconDisplay");
    document.querySelector("#hamIcon").classList.toggle("hamIconHide")
}
const x = document.querySelector("#menu");
x.onclick = toggleMenu;



/* ===== Footer =====*/
document.querySelector("#lastModified").innerHTML = document.lastModified;
document.querySelector("#year").innerHTML = new Date().getFullYear();
/* 
                        <ul>
                            <li><a href="reception"></a>Reception</li>
                            <li><a href="missionaries"></a>Full-time Temple Missionary</li>
                        </ul>

                        */