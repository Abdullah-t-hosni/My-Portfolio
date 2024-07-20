const menuBtn = document.querySelector("#menu-icon"),
  navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-xmark"), navbar.classList.toggle("active");
});
let sections = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll("header nav a");
(window.onscroll = () => {
  sections.forEach((e) => {
    let t = window.scrollY,
      r = e.offsetTop - 150,
      a = e.offsetHeight,
      n = e.getAttribute("id");
    t >= r &&
      t < r + a &&
      (navLinks.forEach((e) => {
        e.classList.remove("active");
      }),
      document
        .querySelector("header nav a[href*=" + n + "]")
        .classList.add("active"));
  });
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 100),
    menuBtn.classList.remove("fa-xmark"),
    navbar.classList.remove("active");
}),
  ScrollReveal({ distance: "80px", duration: 2e3, delay: 200 }),
  ScrollReveal().reveal(".home-content , heading", { origin: "top" }),
  ScrollReveal().reveal(
    ".services-container , home-img , .portfolio-box , .contact form",
    { origin: "bottom" }
  ),
  ScrollReveal().reveal(".home-contact h1 , .about img", { origin: "left" }),
  ScrollReveal().reveal(".home-contact p , .about-content", {
    origin: "right",
  });
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Frontend Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1e3,
  loop: !0,
});
function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  saveThemePreference(newTheme);
}

function saveThemePreference(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.error("Error saving theme preference:", error);
  }
}

function applySavedThemePreference() {
  try {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  } catch (error) {
    console.error("Error applying saved theme preference:", error);
  }
}

document
  .querySelector("#theme-switcher")
  .addEventListener("click", toggleTheme);
applySavedThemePreference();

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

	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")

	  })
	  .catch(err=>console.log(err));
  }

