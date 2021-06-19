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
      spaceBetween: 0
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1536: {
      slidesPerView: 3,
      spaceBetween: 70,
    }
  }  
});


const openText = document.querySelector('.review__btn-down');
      closeText = document.querySelector('.review__btn-up');
      hiddenText = document.querySelector('.review__hidden-text');

// Open feedback
openText.onclick = function() {
  hiddenText.classList.remove('review__hidden-text');
  openText.classList.add('hidden');
  closeText.classList.remove('hidden');
};

// Close feedback
closeText.onclick = function() {
  hiddenText.classList.add('review__hidden-text');
  openText.classList.remove('hidden');
  closeText.classList.add('hidden');
}



