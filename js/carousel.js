const swiperOne = new Swiper('.swiper-one', {

  loop: false,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 0,
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
        slidesPerView: 3,
        spaceBetween: 5
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

  loop: false,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 0,
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
        slidesPerView: 3,
        spaceBetween: 5
      },

  },

});

function secondPreviousSlide() {
  swiperTwo.slidePrev();
}

function secondNextSlide() {
  swiperTwo.slideNext();
}