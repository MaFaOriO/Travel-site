const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navItems = document.getElementsByClassName("nav-items")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

let typed = new Typed(".auto-type", {
  strings: ["Welcome to the travel site!"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
});
