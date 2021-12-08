// SWIPER
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button__next",
      prevEl: ".swiper-button__prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// POPUP
const popup      = document.querySelector('.popup-menu');
      openPopup  = document.querySelector('.main__button');
      closePopup = document.querySelector('.popup-menu__close');

// open POPUP
openPopup.addEventListener('click', () => {
  popup.classList.add('show')
})

// closed.POPUP
closePopup.addEventListener('click', () => {
  popup.classList.remove('show')
})
