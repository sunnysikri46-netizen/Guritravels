// ======================================
// GURI TOUR & TRAVELS
// script.js
// ======================================

// Current Year
const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

        menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    });

}

// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML='<i class="fas fa-bars"></i>';

        }

    });

});

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".fade").forEach(el=>{

    observer.observe(el);

});

// Counter Animation

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".experience");

    if(!stats) return;

    if(window.scrollY > stats.offsetTop-500 && !started){

        counters.forEach(counter=>{

            const text=counter.innerText;

            const number=parseInt(text);

            const suffix=text.replace(number,"");

            let count=0;

            const speed=Math.max(10,number/80);

            const update=()=>{

                if(count<number){

                    count+=Math.ceil(speed);

                    if(count>number) count=number;

                    counter.innerText=count+suffix;

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=number+suffix;

                }

            };

            update();

        });

        started=true;

    }

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

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

// Image Hover Effect

document.querySelectorAll(".car-card img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// Preloader (Optional)

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// Console

console.log("✅ Guri Tour & Travels Website Loaded Successfully");
