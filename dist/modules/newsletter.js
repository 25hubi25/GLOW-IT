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
