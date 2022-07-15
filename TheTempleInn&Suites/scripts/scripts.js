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
    const templesDedicated = jsonObject["templesDedicated"];
    templesDedicated.forEach(TempleDedicated);

    

});

function TempleDedicated(temple) {
    let templeCard = document.createElement("section");
    let templePhoto = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("ul");
    let milestones = document.createElement("ul");
    let closures = document.createElement("ul");

    templePhoto.setAttribute('src', temple.templePhoto);
    templePhoto.setAttribute('alt', `${temple.name}'s Photo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    services.innerHTML = `${temple.services}`;
    milestones.innerHTML = `${temple.milestones}`;
    closures.innerHTML = `${temple.closures}`;

    templePhoto.classList.add("templePhoto");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    services.classList.add("services");
    milestones.classList.add("milestones");
    closures.classList.add("closures");

    templeCard.appendChild(templePhoto);
    templeCard.appendChild(name);
    templeCard.appendChild(address);
    templeCard.appendChild(phone);
    templeCard.appendChild(email);
    templeCard.appendChild(services);
    templeCard.appendChild(milestones);
    templeCard.appendChild(closures);
    infoCards.appendChild(templeCard);
}