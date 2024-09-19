async function sendMail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  if (!name || !email || !message || !subject || !phone) {
    alert("Please fill in all fields");
    return;
  }
  try {
    await emailjs.send("service_px2iqxi", "template_pv4sf5r", {
      name,
      email,
      message,
      subject,
      phone,
    });
    document.getElementById("contact-form").reset();
    alert("Your message was sent successfully!!");
  } catch (error) {
    alert("An error occurred while sending your message, please try again.");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelector("#menu-icon"),
    t = document.querySelector(".navbar"),
    a = document.querySelectorAll("section"),
    n = document.querySelectorAll("header nav a");
  e.addEventListener("click", () => {
    e.classList.toggle("fa-xmark"), t.classList.toggle("active");
  }),
    window.addEventListener("scroll", () => {
      let o = window.scrollY;
      a.forEach((e) => {
        let t = e.offsetTop - 150,
          a = e.offsetHeight,
          i = e.getAttribute("id");
        if (o >= t && o < t + a) {
          n.forEach((e) => e.classList.remove("active"));
          let l = document.querySelector(`header nav a[href*="${i}"]`);
          l && l.classList.add("active");
        }
      }),
        document.querySelector("header").classList.toggle("sticky", o > 100),
        e.classList.remove("fa-xmark"),
        t.classList.remove("active");
    }),
    ScrollReveal({ distance: "80px", duration: 2e3, delay: 200 }).reveal(
      ".home-content, .heading, .portfolio-box",
      { origin: "top" }
    ),
    ScrollReveal().reveal(
      ".services-container, .home-img, .portfolio-box, .contact form",
      { origin: "bottom" }
    ),
    ScrollReveal().reveal(
      ".home-contact h1, .about img, .contact-img, .about-content",
      { origin: "left" }
    ),
    new Typed(".multiple-text", {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1e3,
      loop: !0,
    });
}),
  (function () {
    let e = document.documentElement,
      t = document.querySelector("#theme-switcher");
    function a(t) {
      e.setAttribute("data-theme", t), localStorage.setItem("theme", t);
    }
    let n, o;
    (n = localStorage.getItem("theme")),
      (o = window.matchMedia("(prefers-color-scheme: dark)").matches),
      a(n || (o ? "dark" : "light")),
      t.addEventListener("click", function t() {
        a("dark" === e.getAttribute("data-theme") ? "light" : "dark");
      });
  })(),
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 38,
        density: { enable: !0, value_area: 236.3135092556124 },
      },
      color: { value: "#5c77da" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: !1,
        anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
      },
      size: {
        value: 3,
        random: !0,
        anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 150,
        color: "#5c77da",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 6,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "repulse" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: !0,
  });
var m,
  divId,
  initLatitude,
  initLongitude,
  map,
  $body = $("body");
$(window).on("load", function () {
  $body.addClass("loaded");
}),
  "true" === $body.attr("data-preloader") &&
    $body.append(
      $(
        "<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"
      )
    ),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".button-top"),
      t = document.querySelector("#Home");
    e.addEventListener("click", function () {
      t && t.scrollIntoView({ behavior: "smooth" });
    });
  });
