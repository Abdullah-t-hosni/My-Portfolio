



/* javascript of responsive navigation menu */
const menuBtn = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

/*scroll section active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        // Corrected usage of forEach
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  
  /*sticky navbar*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //   /*Remove Toggle*/
  menuBtn.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*Scroll Reveal*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content , heading", { origin: "top" });
ScrollReveal().reveal(
  ".services-container , home-img , .portfolio-box , .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1 , .about img", { origin: "left" });
ScrollReveal().reveal(".home-contact p , .about-content", { origin: "right" });

/*Typed js*/
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Frontend Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});


function toggleTheme() {
  const rootElem = document.documentElement;
  const currentTheme = rootElem.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootElem.setAttribute("data-theme", newTheme);
  saveThemePreference(newTheme);
}

function saveThemePreference(theme) {
  try {
      localStorage.setItem('theme', theme);
  } catch (error) {
      console.error('Error saving theme preference:', error);
  }
}

function applySavedThemePreference() {
  try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
      }
  } catch (error) {
      console.error('Error applying saved theme preference:', error);
  }
}

document.querySelector("#theme-switcher").addEventListener("click", toggleTheme);

applySavedThemePreference();




