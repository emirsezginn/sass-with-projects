const menuToggle = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("active");
});