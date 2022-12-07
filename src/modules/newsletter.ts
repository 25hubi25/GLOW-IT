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
