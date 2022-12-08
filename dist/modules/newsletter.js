const newsletterInput = document.querySelector("#newsletter-email");
const regexEmail = /\S+@\S+\.\S+/;
const newsletterSubmit = document.querySelector("#newsletter-submit");
newsletterSubmit.addEventListener("click", () => {
    let email = (newsletterInput.value);
    if (regexEmail.test(email)) {
        alert(`Wysłano newsletter na ${email}`);
        console.log(`Wysłano newsletter na ${email}`);
    }
    else {
        alert(`Podany email nie jest poprawny.`);
        console.log("");
    }
});
