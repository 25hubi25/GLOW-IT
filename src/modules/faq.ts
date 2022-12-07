const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq:HTMLDivElement) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});