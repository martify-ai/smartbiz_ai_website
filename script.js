// function toggleMenu() {
//     document.getElementById("navMenu").classList.toggle("show");
// }


// const pricingToggle = document.getElementById("togglePricing");
// if (pricingToggle) {
//     pricingToggle.addEventListener("change", () => {
//         document.getElementById("monthly").style.display = pricingToggle.checked ? "none" : "block";
//         document.getElementById("annual").style.display = pricingToggle.checked ? "block" : "none";
//     });
// }

// const auditForm = document.getElementById("auditForm");
// if (auditForm) {
//     auditForm.addEventListener("submit", function(e) {
//         e.preventDefault();
//         const score = Math.floor(Math.random() * 11);
//         document.getElementById("auditResult").textContent = `Your AI business score: ${score}/10 – ${score < 5 ? 'Needs a reboot 🚧' : 'Looking good! 🚀'}`;
//     });
// }
// const backToTop = document.querySelector('.back-to-top');
// window.addEventListener('scroll', () => {
//     backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
// });

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }
// const testimonials = document.querySelectorAll('.carousel .testimonial');
// let currentSlide = 0;
// if (testimonials.length > 0) {
//     setInterval(() => {
//         testimonials.forEach((el) => {
//             el.style.transform = `translateX(-${currentSlide * 100}%)`;
//         });
//         currentSlide = (currentSlide + 1) % testimonials.length;
//     }, 4000);
// }

// document.getElementById('togglePricing').addEventListener('change', function() {
//     const monthly = document.getElementById('monthly');
//     const annual = document.getElementById('annual');
//     if (this.checked) {
//         monthly.style.display = 'none';
//         annual.style.display = 'block';
//     } else {
//         monthly.style.display = 'block';
//         annual.style.display = 'none';
//     }
// });

// // FAQS
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//     item.addEventListener('click', () => {
//         faqItems.forEach(i => {
//             if (i !== item) i.classList.remove('active');
//         });
//         item.classList.toggle('active');
//     });
// });

// const form = document.getElementById("questionnaire");
// if (form) {
//     const fields = form.querySelectorAll("input, select, textarea");
//     fields.forEach(field => {
//         const saved = localStorage.getItem(field.name);
//         if (saved) field.value = saved;
//         field.addEventListener("input", () => localStorage.setItem(field.name, field.value));
//     });
// }


// MOBILE NAV TOGGLE
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

// PRICING TOGGLE
const pricingToggle = document.getElementById("togglePricing");
if (pricingToggle) {
    pricingToggle.addEventListener("change", () => {
        const monthly = document.getElementById("monthly");
        const annual = document.getElementById("annual");
        monthly.style.display = pricingToggle.checked ? "none" : "block";
        annual.style.display = pricingToggle.checked ? "block" : "none";
    });
}

// AI AUDIT SCORE GENERATOR
const auditForm = document.getElementById("auditForm");
if (auditForm) {
    auditForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const score = Math.floor(Math.random() * 11);
        document.getElementById("auditResult").textContent =
            `Your AI business score: ${score}/10 – ${score < 5 ? 'Needs a reboot 🚧' : 'Looking good! 🚀'}`;
    });
}

// BACK TO TOP BUTTON
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// TESTIMONIAL CAROUSEL
const testimonials = document.querySelectorAll('.carousel .testimonial');
let currentSlide = 0;
if (testimonials.length > 0) {
    setInterval(() => {
        testimonials.forEach((el) => {
            el.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
        currentSlide = (currentSlide + 1) % testimonials.length;
    }, 4000);
}

// FAQ TOGGLE
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// FORM AUTOSAVE (FOR QUESTIONNAIRE)
const form = document.getElementById("questionnaire");
if (form) {
    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach(field => {
        const saved = localStorage.getItem(field.name);
        if (saved) field.value = saved;
        field.addEventListener("input", () => localStorage.setItem(field.name, field.value));
    });
}

// SECTION SCROLL HIGHLIGHTING (ACTIVE NAV LINK)
// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section[id]");
//     const navLinks = document.querySelectorAll("nav a");

//     let currentSectionId = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 80;
//         const sectionHeight = section.offsetHeight;
//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//             currentSectionId = section.getAttribute("id");
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove("active");
//         if (link.getAttribute("href").includes(currentSectionId)) {
//             link.classList.add("active");
//         }
//     });
// });