function sendMail() {
  var e = document.getElementById("name").value,
    t = document.getElementById("email").value,
    a = document.getElementById("message").value,
    l = document.getElementById("subject").value,
    n = document.getElementById("phone").value;
  if ("" === e || "" === t || "" === a || "" === l || "" === n) {
    alert("Please fill in all fields");
    return;
  }
  emailjs
    .send("service_px2iqxi", "template_pv4sf5r", {
      name: e,
      email: t,
      message: a,
      subject: l,
      phone: n,
    })
    .then((e) => {
      console.log("Success:", e),
        (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("subject").value = ""),
        (document.getElementById("phone").value = ""),
        (document.getElementById("message").value = ""),
        alert("Your message was sent successfully!!");
    })
    .catch((e) => {
      alert("An error occurred while sending your message, please try again.");
    });
}
document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelector("#menu-icon"),
    t = document.querySelector(".navbar"),
    a = document.querySelectorAll("section"),
    l = document.querySelectorAll("header nav a");
  e.addEventListener("click", () => {
    e.classList.toggle("fa-xmark"), t.classList.toggle("active");
  }),
    window.addEventListener("scroll", () => {
      let n = window.scrollY;
      a.forEach((e) => {
        let t = e.offsetTop - 150,
          a = e.offsetHeight,
          i = e.getAttribute("id");
        if (n >= t && n < t + a) {
          l.forEach((e) => e.classList.remove("active"));
          let o = document.querySelector(`header nav a[href*="${i}"]`);
          o && o.classList.add("active");
        }
      }),
        document.querySelector("header").classList.toggle("sticky", n > 100),
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
    let l, n;
    (l = localStorage.getItem("theme")),
      (n = window.matchMedia("(prefers-color-scheme: dark)").matches),
      a(l || (n ? "dark" : "light")),
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
  
"use strict";
var m, divId, initLatitude, initLongitude, map, $body = $("body");
$(window).on("load", function() {
    $body.addClass("loaded")
}),
"true" === $body.attr("data-preloader") && $body.append($("<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"));
var customCursor = document.getElementById("cursor");
if (customCursor) {
    var e, a = document.getElementById("cursor");
    document.addEventListener("mousemove", function(e) {
        a.style.left = e.pageX + "px",
        a.style.top = e.pageY + "px"
    }),
    document.querySelectorAll("a, button, input, textarea, .cursor-link").forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            a.classList.add("scale-cursor")
        }),
        e.addEventListener("mouseleave", function() {
            a.classList.remove("scale-cursor")
        })
    })
}
var headerNav = $(".nav-box");
if (headerNav.length) {
    var s = $("#nav-toggle");
    s.on("click", function() {
        headerNav.hasClass("show") ? (headerNav.removeClass("show"),
        s.removeClass("active")) : (headerNav.addClass("show"),
        s.addClass("active"))
    }),
    $(document).on("click", function(e) {
        0 === $(e.target).closest(".nav-box, #nav-toggle").length && headerNav.hasClass("show") && (headerNav.removeClass("show"),
        s.removeClass("active"))
    })
}
var scrollTopBtn = document.querySelector(".scrolltotop");
scrollTopBtn && window.addEventListener("scroll", function() {
    window.pageYOffset > 700 ? scrollTopBtn.classList.add("show") : scrollTopBtn.classList.remove("show")
});
var swiper = new Swiper(".portfolio-slider",{
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: ".swiper-portfolio-next",
        prevEl: ".swiper-portfolio-prev"
    }
})
  , swiper = new Swiper(".blog-slider",{
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: ".swiper-blog-next",
        prevEl: ".swiper-blog-prev"
    }
})
  , swiper = new Swiper(".clients-slider",{
    slidesPerView: 2,
    spaceBetween: 24,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
})
  , swiper = new Swiper(".testimonial-slider",{
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-testimonial-pagination",
        type: "progressbar"
    }
})
  , $lightboxImage = $(".lightbox-image-box");
$lightboxImage.each(function() {
    $(this).magnificPopup({
        type: "image",
        fixedContentPos: !1,
        removalDelay: 200,
        closeOnContentClick: !0,
        image: {
            titleSrc: "data-image-title"
        }
    })
});
var $lightboxMedia = $(".lightbox-media-box");
$lightboxMedia.each(function() {
    $(this).magnificPopup({
        type: "iframe",
        fixedContentPos: !1,
        removalDelay: 200,
        preloader: !1,
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                }
            },
            srcAction: "iframe_src"
        }
    })
});
var mapCanvas = $(".gmap");
if (mapCanvas.length)
    for (var i = 0; i < mapCanvas.length; i++)
        initLatitude = (m = mapCanvas[i]).dataset.latitude,
        initLongitude = m.dataset.longitude,
        divId = "#" + m.id,
        (map = new GMaps({
            el: divId,
            lat: initLatitude,
            lng: initLongitude,
            zoom: 16,
            scrollwheel: !1,
            styles: []
        })).addMarker({
            lat: initLatitude,
            lng: initLongitude
        });
$("#contactform").on("submit", function(e) {
    var a = $("#name").val()
      , s = $("#email").val()
      , t = $("#subject").val()
      , o = $("#message").val();
    ("" === a && $("#name").addClass("error-color"),
    "" === s && $("#email").addClass("error-color"),
    "" === t && $("#subject").addClass("error-color"),
    "" === o) ? $("#message").addClass("error-color") : ($.ajax({
        url: "assets/php/contact-form.php",
        data: $(this).serialize(),
        type: "POST",
        success: function(e) {
            $("#success").addClass("show-result"),
            $("#contactform").each(function() {
                this.reset()
            })
        },
        error: function(e) {
            $("#error").addClass("show-result")
        }
    }),
    $("#contactform input, #contactform textarea").removeClass("error-color")),
    e.preventDefault()
});
 