const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

/* WhatsApp Enquiry Form */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector("select").value;
        const message = this.querySelector("textarea").value;

        const whatsappMessage =
            `Hello Development 2.0 Saloon,

I want to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`;

        window.open(
            `https://wa.me/919929030111?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );

        this.reset();
    });
}

/* Scroll Reveal Animation */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Header Shadow on Scroll */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});

/* Testimonial Auto Slider */
const testimonials = document.querySelectorAll(".testimonial");
let currentReview = 0;

function showReview() {
    if (!testimonials.length) return;

    testimonials.forEach(review => {
        review.classList.remove("active");
    });

    testimonials[currentReview].classList.add("active");

    currentReview++;

    if (currentReview >= testimonials.length) {
        currentReview = 0;
    }
}

showReview();
setInterval(showReview, 3000);
