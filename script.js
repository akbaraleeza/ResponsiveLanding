// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Get Started Button
const ctaBtn = document.querySelector(".cta-btn");

ctaBtn.addEventListener("click", () => {
    document.querySelector("#features").scrollIntoView({
        behavior: "smooth"
    });
});