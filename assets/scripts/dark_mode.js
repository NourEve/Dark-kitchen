function darkMode() {
  document.body.classList.toggle("dark");
}

const btnSwitch = document.getElementsByClassName("header__colormode");
console.log(btnSwitch); // maybe change the class name
for (const btn of btnSwitch) {
  btn.addEventListener("click", darkMode);
}
