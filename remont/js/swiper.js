var swiper = new Swiper('.swiper-1', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-1',
    prevEl: '.prev-1',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    667: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    736: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25
    },
  }
});

// Swiper-2
var swiper = new Swiper('.swiper-2', {
  navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
  },
});