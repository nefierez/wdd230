/* ===== Last Visit =====*/
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

/* ===== Lazy Loading Images =====*/
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}