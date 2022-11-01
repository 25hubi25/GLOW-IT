const hamburgerBtn = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobile-nav");
hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle('cancel');
    if (mobileNav.style.display == "none") {
        mobileNav.style.display = "flex";
    }
    else {
        mobileNav.style.display = "none";
    }
});
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
const newsletterInput = document.querySelector("#newsletter-email");
const regexEmail = /\S+@\S+\.\S+/;
const newsletterSubmit = document.querySelector("#newsletter-submit");
newsletterSubmit.addEventListener("click", () => {
    let email = (newsletterInput.value);
    if (regexEmail.test(email)) {
        console.log(`Wysłano newsletter na ${email}`);
    }
    else {
        console.log("Podany email nie jest poprawny.");
    }
});
const productImages = [
    "/img/product1.png",
    "/img/product2.png",
    "/img/product3.png",
    "/img/product4.png",
    "/img/product5.png",
    "/img/product6.png",
    "/img/product7.png",
    "/img/product8.png"
];
const effectsImages = [
    "/img/effects1.png",
    "/img/effects2.png",
    "/img/effects3.png",
    "/img/effects4.png",
    "/img/effects5.png",
    "/img/effects6.png",
    "/img/effects7.png",
    "/img/effects8.png"
];
