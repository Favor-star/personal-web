const body = document.querySelector("main");
const loader = document.getElementById("loader");
const menuIcon = document.querySelectorAll(".menu-icon");
const navLinks = document.querySelectorAll(".nav-content");
const moreAboutMe = document.querySelector(".more-about-me");
const welcome = document.querySelector("#welcome-main-div");

const contactMe = document.getElementById("contact-me-main-div");
contactMe.style.display = "none";
contactMe.classList.add("hidden");

const navbar = document.getElementById("navbar-main-div");
navbar.style.display = "none";
navbar.classList.add("hidden");

const aboutMe = document.getElementById("about-me-main-div");
aboutMe.style.display = "none";
aboutMe.classList.add("hidden");

const works = document.getElementById("works-main-div");
works.style.display = "none";
works.classList.add("hidden");

const viewWork = document.getElementById("view-work-main-div");
viewWork.style.display = " none";
viewWork.classList.add("hidden");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    body.style.opacity = 1;
  }, 1000);
});

menuIcon.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    // if (elem.parentElement.id === "navbar-main-div") {
    //   elem.removeEventListener("click");
    // }

    elem.parentElement.classList.add("hidden");

    setTimeout(() => {
      elem.parentElement.style.display = "none";
    }, 500);

    setTimeout(() => {
      navbar.style.display = "flex";
    }, 700);

    setTimeout(() => {
      navbar.classList.remove("hidden");
    }, 705);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switch (link.innerText) {
      case "Home":
        switchDiv("welcome-main-div");
        break;
      case "Contact me":
        switchDiv("contact-me-main-div");
        break;
      case "About me":
        switchDiv("about-me-main-div");
        break;
      case "Works":
        switchDiv("works-main-div");
        break;
    }
  });
});
moreAboutMe.addEventListener("click", () => {
   const element = document.getElementById("about-me-main-div");

  welcome.classList.add("hidden");

   setTimeout(() => {
     welcome.style.display = "none";
   }, 500);

   setTimeout(() => {
     element.style.display = "flex";
   }, 700);

   setTimeout(() => {
     element.classList.remove("hidden");
   }, 705);
});

const switchDiv = (identity) => {
  const element = document.getElementById(identity);

  navbar.classList.add("hidden");

  setTimeout(() => {
    navbar.style.display = "none";
  }, 500);

  setTimeout(() => {
    element.style.display = "flex";
  }, 700);

  setTimeout(() => {
    element.classList.remove("hidden");
  }, 705);
};
