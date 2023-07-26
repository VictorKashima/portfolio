const swiperOne = new Swiper('.first-carousel', {

    loop: false,
    speed: 400,

    slidesPerView: 1.5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    rewind: true,

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

const swiperTwo = new Swiper('.second-carousel', {

  loop: false,
  speed: 400,
  slidesPerView: 1.5,
  spaceBetween: 20,
  slidesPerGroup: 1,
  rewind: true,

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