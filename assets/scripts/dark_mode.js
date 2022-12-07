function darkMode() {
    var switchMode = document.body;
    switchMode.classList.toggle("dark");
}

cardsMenu = document.getElementsByClassName("btn-dark"); // maybe change the class name
navBar = document.querySelector("nav"); // maybe change the tag
for (let displayCard of navBar) {
    displayCard.addEventListener('click', darkMode);
}