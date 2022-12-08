const newsletterInput: HTMLInputElement = document.querySelector("#newsletter-email");
const regexEmail:RegExp = /\S+@\S+\.\S+/;
const newsletterSubmit: HTMLInputElement = document.querySelector("#newsletter-submit");

newsletterSubmit.addEventListener("click", () => {
    let email:string = (newsletterInput.value);
    if (regexEmail.test(email)) {
        alert(`Wysłano newsletter na ${email}`);
        console.log(`Wysłano newsletter na ${email}`);
    } else {
        alert(`Podany email nie jest poprawny.`)
        console.log("")
    }
});
