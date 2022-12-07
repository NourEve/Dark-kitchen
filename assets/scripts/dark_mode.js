function darkMode() {
    var switchMode = document.body;
    switchMode.classList.toggle("dark");
}

cardsMenu = document.getElementsByTagName("btn-dark");
navBar = document.querySelector("nav");
for (let displayCard of navBar) {
    displayCard.addEventListener('click', darkMode);
}