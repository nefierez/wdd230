const URLrequest = 'https://nefierez.github.io/wdd230/chamber/scripts/data.json';
const infoCards = document.querySelector(".infoCards");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["companies"];
    console.table(jsonObject);
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website = document.createElement("p");
    let membership = document.createElement("p");
    let logo = document.createElement("img");

    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    email.textContent = `${company.email}`;
    website.innerHTML = `<a href="${company.url}" target="_blank">📌</a>`;
    membership.textContent = `${company.membership}`;
    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', `${company.name}'s logo`);

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(logo);
    infoCards.appendChild(card);
}
/*
function(displayCompanies)
*/