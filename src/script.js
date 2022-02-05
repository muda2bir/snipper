let hamburger = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
