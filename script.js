let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "ML Engineer",
    "System Administrator",
    "Data Analyst",
    "IT Support",
  ],
  typeSpeed: 80,
  backspeed: 80,
  backDelay: 1700,
  loop: true,
});

// Lightbox
const lightbox = document.getElementById("certificateLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".close-lightbox");
const certificateImages = document.querySelectorAll(".testimonial-item img");

certificateImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
