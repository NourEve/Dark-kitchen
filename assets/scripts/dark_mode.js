function darkMode() {
  document.body.classList.toggle("dark");
}

const btnSwitch = document.getElementsByClassName("colormode");
console.log(btnSwitch); // maybe change the class name
for (const btn of btnSwitch) {
  btn.addEventListener("click", darkMode);
}