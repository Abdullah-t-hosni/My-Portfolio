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
        document
          .querySelector(`header nav a[href*=${sectionId}]`)
          .classList.add("active");
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

  ScrollReveal().reveal(
    ".services-container , home-img , .portfolio-box , .contact form , ",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-contact h1 , .about img, .contact-img", {
    origin: "left",
  });
  ScrollReveal().reveal(".home-contact p , .about-content", {
    origin: "right",
  });

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
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = savedTheme || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", defaultTheme);
  }

  applyTheme();

  document
    .querySelector("#theme-switcher")
    .addEventListener("click", toggleTheme);
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

particlesJS("particles-js", {"particles":{"number":{"value":38,"density":{"enable":true,"value_area":236.3135092556124}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
