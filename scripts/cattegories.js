const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navItems = document.getElementsByClassName("nav-items")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
