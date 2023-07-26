// const swiper = new Swiper('.swiper', {

//     a11y: {
//       prevSlideMessage: 'Previous slide',
//       nextSlideMessage: 'Next slide',
//     },

//     loop: false,
//     speed: 400,

//     slidesPerView: 1.5,
//     spaceBetween: 20,
//     slidesPerGroup: 1,
//     rewind: true,

//     breakpoints: {

//         768: {
//           slidesPerView: 1.6,
//           spaceBetween: 40
//         },

//         1000: {
//           slidesPerView: 2,
//           spaceBetween: 40
//         },
        
//         1368: {
//           slidesPerView: 2.7,
//           spaceBetween: 40
//         },

//     },

// })

// function vaicarai() {
//   console.log("QDWKOQWODQL");
//   swiper.slideNext( );
// }

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