// ==============================
// GURI TOUR & TRAVELS
// script.js
// ==============================

// Current Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.style.background = "#08306b";
        header.style.padding = "10px 6%";
    }else{
        header.style.background = "#0d47a1";
        header.style.padding = "12px 6%";
    }

});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade").forEach(el=>{
    observer.observe(el);
});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Image Hover Animation
document.querySelectorAll(".car-card img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

console.log("Guri Tour & Travels Website Loaded Successfully");
