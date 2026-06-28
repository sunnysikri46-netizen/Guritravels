// ===============================
// GURI TOUR & TRAVELS
// script.js
// ===============================

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (topBtn) {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Current Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Guri Tour & Travels Website Loaded Successfully!");
