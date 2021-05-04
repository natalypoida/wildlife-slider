var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 3,
  //wrapperClass: "wrapper-slider",
});
swiper.init();
console.log(swiper.slides);
