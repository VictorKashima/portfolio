const swiper = new Swiper('.swiper', {

    cssMode: true,
    loop: false,
    speed: 400,
    allowSlideNext: true,
    allowSlidePrev: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    slidesPerView: 2.7,
    slidesPerGroup: 1,
    spaceBetween: 40,
    rewind: true,

})

function previousSlide() {
    swiper.slidePrev();
}

function nextSlide() {
    swiper.slideNext();
}