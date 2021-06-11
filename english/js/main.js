// Burger menu
const burgerMenu = document.querySelector('.burger-menu__wrap');
      open       = document.querySelector('.header__toggle');
      close      = document.querySelector('.burger-menu__close');

open.onclick = function openMenu() {
  burgerMenu.classList.add('show');
}

close.onclick = function closeMenu() {
  burgerMenu.classList.remove('show')
}

// Sviper Services
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }  
});
