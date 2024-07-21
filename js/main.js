document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-icon"),
        navbar = document.querySelector(".navbar"),
        sections = document.querySelectorAll("section"),
        navLinks = document.querySelectorAll("header nav a");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150,
            sectionHeight = section.offsetHeight,
            sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector(`header nav a[href*=${sectionId}]`).classList.add("active");
      }
    });

    document.querySelector("header").classList.toggle("sticky", scrollY > 100);
    menuBtn.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });

  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  }).reveal(".home-content , heading", { origin: "top" });

  ScrollReveal().reveal(".services-container , home-img , .portfolio-box , .contact form", { origin: "bottom" });
  ScrollReveal().reveal(".home-contact h1 , .about img", { origin: "left" });
  ScrollReveal().reveal(".home-contact p , .about-content", { origin: "right" });

  new Typed(".multiple-text", {
    strings: ["Web Developer", "Frontend Developer", "Web Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
});

// Dark Mode Switch
(function () {
  const root = document.documentElement;

  function toggleTheme() {
    const theme = root.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = savedTheme || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", defaultTheme);
  }

  applyTheme();

  document.querySelector("#theme-switcher").addEventListener("click", toggleTheme);
})();


// Contact Form 
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
    phone: document.getElementById("phone").value,
  };

  const serviceID = "service_px2iqxi";
  const templateID = "template_pv4sf5r";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
