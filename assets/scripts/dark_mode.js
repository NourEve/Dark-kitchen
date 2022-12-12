function darkMode() {
  document.body.classList.toggle("dark");
}

const btnSwitch = document.getElementsByClassName("header__colormode");
for (let btn of btnSwitch) {
  btn.addEventListener("click", darkMode);
}

function displayMenu() {
  document.getElementsByClassName("header__menu")[0].classList.toggle("displayed");
}

let btnMenu = document.querySelector(".header__fixe__burger")

btnMenu.addEventListener('click', displayMenu)

function displayCart() {
  document.getElementsByClassName("header__order")[0].classList.toggle("displayed");
}

let btnCart = document.querySelector(".header__fixe__panier")
btnCart.addEventListener('click', displayCart)