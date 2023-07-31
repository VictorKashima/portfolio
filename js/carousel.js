const swiperOne = new Swiper('.swiper-one', {

  // loop: true,
  // speed: 1000,
  // allowTouchMove: false,
  // cssMode: true,
  // slidesPerView: 1,
  // slidesPerGroup: 1,

  loop: false,
  speed: 500,
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  rewind: true,
  cssMode: true,

  breakpoints: {

      768: {
        slidesPerView: 1.6,
        spaceBetween: 40
      },

      1000: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      
      1368: {
        slidesPerView: 2.7,
        spaceBetween: 40
      },

  },

});

function firstPreviousSlide() {
  swiperOne.slidePrev();
}

function firstNextSlide() {
  swiperOne.slideNext();
}

const swiperTwo = new Swiper('.swiper-two', {

  // loop: true,
  // speed: 1000,
  // allowTouchMove: false,
  // cssMode: true,
  // slidesPerView: 1,
  // slidesPerGroup: 1,

  loop: false,
  speed: 500,
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  rewind: true,
  cssMode: true,

  breakpoints: {

      768: {
        slidesPerView: 1.6,
        spaceBetween: 40
      },

      1000: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      
      1368: {
        slidesPerView: 2.7,
        spaceBetween: 40
      },

  },

});

function secondPreviousSlide() {
  swiperTwo.slidePrev();
}

function secondNextSlide() {
  swiperTwo.slideNext();
}