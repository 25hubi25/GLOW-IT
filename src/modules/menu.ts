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