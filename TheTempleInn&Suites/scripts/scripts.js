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




/*===== Footer =====*/
const URLrequest = 'https://nefierez.github.io/wdd230/TheTempleInn&Suites/scripts/temples.json';
const infoCards = document.querySelector(".TemplesDedicated");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temple = jsonObject["temples"];
    temple.forEach(displayTemple);
});

function displayTemple(temple) {

    let templeCard = document.createElement("section");
    let templePhoto = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("li");
    let membership = document.createElement("p");

    templePhoto.setAttribute('src', temple.templePhoto);
    templePhoto.setAttribute('alt', `${temple.name}'s logo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    services.innerHTML = `${temple.services}`;
    membership.textContent = `${temple.membership}`;

    templePhoto.classList.add("templePhoto");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    services.classList.add("services");
    membership.classList.add("membership");

    templeCard.appendChild(templePhoto);
    templeCard.appendChild(name);
    templeCard.appendChild(address);
    templeCard.appendChild(phone);
    templeCard.appendChild(email);
    templeCard.appendChild(services);
    templeCard.appendChild(membership);
    infoCards.appendChild(templeCard);
}