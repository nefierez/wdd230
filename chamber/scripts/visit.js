const lastVisit = Number(localStorage.getItem('lastvisit'));
const currentVisit = Date.now() - lastVisit;
const daysBetweenVisits = currentVisit / (1000 * 60 * 60 * 24);
const firstVisit = `Welcome, this is your first visit!`
const visits = `Welcome back! Your last visit was ${Math.round(daysBetweenVisits)} days ago.`

if (lastVisit === 0) {
    document.querySelector("#visits").textContent = firstVisit;
} else {
    document.querySelector("#visits").textContent = visits;
}
localStorage.setItem('lastvisit', Date.now())