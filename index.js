const menuIcon = document.querySelector(".menu-icon")
const loader = document.getElementById("loader");
const welcomeSection = document.querySelector(".welcome");
const body = document.querySelector("main");
console.log(document);
window.addEventListener("load", () => {
    setTimeout(() => {
     loader.style.display = "none"
      body.style.opacity = 1;
  },2000)
});
menuIcon.addEventListener("click", () => {
  welcomeSection.classList.toggle("hidden-welcome");
});
