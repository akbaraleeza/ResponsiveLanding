// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// =========================
// CLOSE MENU AFTER CLICKING
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// GET STARTED BUTTONS
// =========================

const ctaButtons = document.querySelectorAll(".cta-btn");

ctaButtons.forEach((button) => {

    button.addEventListener("click", () => {

        document.querySelector("#features").scrollIntoView({
            behavior: "smooth"
        });

    });

});