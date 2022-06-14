const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject["prophets"];
        console.table(jsonObject);
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let birth = document.createElement("p");
    let children = document.createElement("p");
    let portrait = document.createElement("img");

    name.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.textContent = `${prophet.name} was born on ${prophet.birthdate} in ${prophet.birthplace}.`;
    children.textContent = `He was father of ${prophet.numofchildren} children.`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(birth);
    card.appendChild(children);
    card.appendChild(portrait);
    cards.appendChild(card);
}

document.querySelector("#lastModified").innerHTML = `Last modified on ${document.lastModified}`;