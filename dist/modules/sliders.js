const productsSlider = new Swiper(".productsSlider", {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 5,
        },
    },
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".right-arrow",
        prevEl: ".left-arrow",
    },
});
const effectsSlider = new Swiper(".effectsSlider", {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 5,
        },
    },
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".effects-right",
        prevEl: ".effects-left",
    },
});