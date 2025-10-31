// script.js — Ahmad Grammar & Islamic School Portfolio

// --- Show current year in footer ---
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// --- Smooth scroll for navigation links ---
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- Highlight active section while scrolling ---
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const navItem = document.querySelector(`nav a[href='#${id}']`);
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      if (navItem) navItem.classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// --- Optional: Back to top button ---
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑ Top";
backToTopBtn.id = "backToTop";
Object.assign(backToTopBtn.style, {
  position: "fixed",
  bottom: "24px",
  right: "24px",
  padding: "10px 14px",
  background: "#0b5cff",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "none",
  zIndex: 999
});
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
