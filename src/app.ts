import './modules/sliders.js';

const hamburgerBtn: HTMLButtonElement = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-nav");
hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle('cancel');
    if (mobileNav.style.display == "none") {
        mobileNav.style.display = "flex";
    } else {
        mobileNav.style.display = "none";
    }
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq:HTMLDivElement) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const newsletterInput: HTMLInputElement = document.querySelector("#newsletter-email");
const regexEmail:RegExp = /\S+@\S+\.\S+/;
const newsletterSubmit: HTMLInputElement = document.querySelector("#newsletter-submit");

newsletterSubmit.addEventListener("click", () => {
    let email:string = (newsletterInput.value);
    if (regexEmail.test(email)) {
        console.log(`Wysłano newsletter na ${email}`);
    } else {
        console.log("Podany email nie jest poprawny.")
    }
});

const productImages:string[] = [
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
    "/img/product4.png",
    "/img/product5.png",
    "/img/product6.png",
    "/img/product7.png",
    "/img/product8.png"
];


const effectsImages:string[] = [
    "/img/effects1.png",
    "/img/effects2.png",
    "/img/effects3.png",
    "/img/effects4.png",
    "/img/effects5.png",
    "/img/effects6.png",
    "/img/effects7.png",
    "/img/effects8.png"
];