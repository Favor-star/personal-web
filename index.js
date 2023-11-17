const body = document.querySelector("main");
const loader = document.getElementById("loader");

const welcome = document.getElementById("welcome-main-div");
welcome.style.display = "none";

const navbar = document.getElementById("navbar-main-div");
navbar.style.display = "none";

const aboutMe = document.getElementById("about-me-main-div");
aboutMe.style.display = "none";

const works = document.getElementById("works-main-div");
works.style.display = "none"

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    body.style.opacity = 1;
  }, 2000);
});
