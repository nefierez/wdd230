const URLrequest = 'https://nefierez.github.io/wdd230/TheTempleInn&Suites/scripts/temples.json';
const TempleDedicatedCard = document.querySelector(".TemplesDedicated");
const TempleAnnouncedCard = document.querySelector(".TemplesAnnounced");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const templesDedicated = jsonObject["templesDedicated"];
    templesDedicated.forEach(TempleDedicated);

    const templesAnnounced = jsonObject["templesAnnounced"];
    templesAnnounced.forEach(TempleAnnounced);
});

function TempleDedicated(temple) {
/*===== Creating Main Holders Elements =====*/
    let templeCard = document.createElement("section");
    let templePhotoHolder = document.createElement("picture");
    let services = document.createElement("ul");
    let milestones = document.createElement("ul");
    let closures = document.createElement("ul");

/*===== Creating Children Elements =====*/
    let templePhoto = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let servicesTitle = document.createElement("h3")
    let services1 = document.createElement("li");
    let services2 = document.createElement("li");
    let services3 = document.createElement("li");
    let milestonesTitle = document.createElement("h3")
    let milestones1 = document.createElement("li");
    let milestones2 = document.createElement("li");
    let milestones3 = document.createElement("li");
    let closuresTitle = document.createElement("h3")
    let closures1 = document.createElement("li");
    let closures2 = document.createElement("li");
    let closures3 = document.createElement("li");
    let closures4 = document.createElement("li");
    let closures5 = document.createElement("li");
    let closures6 = document.createElement("li");

/*===== Assigning JSON values to child elements =====*/
    templePhoto.setAttribute('src', temple.templePhoto);
    templePhoto.setAttribute('alt', `${temple.name}'s Photo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    servicesTitle.innerHTML = `Temple Services`;
    services1.innerHTML = `${temple.services[0]}`;
    services2.innerHTML = `${temple.services[1]}`;
    services3.innerHTML = `${temple.services[2]}`;
    milestonesTitle.innerHTML = `Temple Milestones`;
    milestones1.innerHTML = `${temple.milestones[0]}`;
    milestones2.innerHTML = `${temple.milestones[1]}`;
    milestones3.innerHTML = `${temple.milestones[2]}`;
    closuresTitle.innerHTML = `Temple Closures 2022`;
    closures1.innerHTML = `${temple.closures[0]}`;
    closures2.innerHTML = `${temple.closures[1]}`;
    closures3.innerHTML = `${temple.closures[2]}`;
    closures4.innerHTML = `${temple.closures[3]}`;
    closures5.innerHTML = `${temple.closures[4]}`;
    closures6.innerHTML = `${temple.closures[5]}`;

/*===== Assigning classes to elements =====*/
    templeCard.classList.add("temples")
    templePhotoHolder.classList.add("templePhotoHolder")
    templePhoto.classList.add("templePhoto");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    servicesTitle.classList.add("servicesTitle")
    services.classList.add("services");
    milestonesTitle.classList.add("milestonesTitle")
    milestones.classList.add("milestones");
    closuresTitle.classList.add("closuresTitle");
    closures.classList.add("closures");

/*===== Appending holders to the Temple Cards =====*/
    templeCard.appendChild(templePhotoHolder)
    templeCard.appendChild(name);
    templeCard.appendChild(address);
    templeCard.appendChild(phone);
    templeCard.appendChild(email);
    templeCard.appendChild(servicesTitle);
    templeCard.appendChild(services);
    templeCard.appendChild(milestonesTitle);
    templeCard.appendChild(milestones);
    templeCard.appendChild(closuresTitle);
    templeCard.appendChild(closures);

/*===== Appending children to their parents =====*/
    templePhotoHolder.appendChild(templePhoto);
    services.appendChild(services1);
    services.appendChild(services2);
    services.appendChild(services3);
    milestones.appendChild(milestones1);
    milestones.appendChild(milestones2);
    milestones.appendChild(milestones3);
    closures.appendChild(closures1);
    closures.appendChild(closures2);
    closures.appendChild(closures3);
    closures.appendChild(closures4);
    closures.appendChild(closures5);
    closures.appendChild(closures6);

/*===== Appending Temple Cards to the main div 'TemplesDedicated' =====*/
    TempleDedicatedCard.appendChild(templeCard);
}

function TempleAnnounced(temple) {
    /*===== Creating Main Holders Elements =====*/
    let templeCard = document.createElement("section");
    let templePhotoHolder = document.createElement("picture");
    let milestones = document.createElement("ul");

/*===== Creating Children Elements =====*/
    let templePhoto = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let importantInfo = document.createElement("p")
    let milestonesTitle = document.createElement("h3")
    let milestones1 = document.createElement("li");
    let milestones2 = document.createElement("li");

/*===== Assigning JSON values to child elements =====*/
    templePhoto.setAttribute('src', temple.templePhoto);
    templePhoto.setAttribute('alt', `${temple.name}'s Photo`);
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    importantInfo.textContent = `${temple.importantInfo}`;
    milestonesTitle.innerHTML = `Temple Milestones`;
    milestones1.innerHTML = `${temple.milestones[0]}`;
    milestones2.innerHTML = `${temple.milestones[1]}`;

/*===== Assigning classes to elements =====*/
    templeCard.classList.add("temples")
    templePhotoHolder.classList.add("templePhotoHolder")
    templePhoto.classList.add("templePhoto");
    name.classList.add("name");
    address.classList.add("address");
    milestonesTitle.classList.add("milestonesTitle")
    milestones.classList.add("milestones");

/*===== Appending holders to the Temple Cards =====*/
    templeCard.appendChild(templePhotoHolder)
    templeCard.appendChild(name);
    templeCard.appendChild(address);
    templeCard.appendChild(importantInfo);
    templeCard.appendChild(milestonesTitle);
    templeCard.appendChild(milestones);
    
/*===== Appending children to their parents =====*/
    templePhotoHolder.appendChild(templePhoto);
    milestones.appendChild(milestones1);
    milestones.appendChild(milestones2);

/*===== Appending Temple Cards to the main div 'TemplesAnnounced' =====*/
    TempleAnnouncedCard.appendChild(templeCard);
}