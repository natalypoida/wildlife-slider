var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,

        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,


        },
        960: {
            slidesPerView: 2,

        },
        1200: {
            slidesPerView: 3,

        },
    },
})
swiper.init();