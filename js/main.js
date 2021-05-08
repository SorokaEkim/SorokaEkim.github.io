// Burger
const open    = document.querySelector('.header__burger');
      menu    = document.querySelector('.header__burger-menu');

open.onclick = function() {
  menu.classList.toggle('menu__active')
  open.classList.toggle('burger__active')
}

// Swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Swiper_2
var swiper = new Swiper(".mySwiper_2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is <= 499px
    320: {
        slidesPerView: 1,
        spaceBetweenSlides: 30,
        allowTouchMove: true,
    },
    // when window width is <= 999px
    640: {
        slidesPerView: 2,
        spaceBetweenSlides: 40,
        allowTouchMove: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
      allowTouchMove: false,
    },
    1280: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
      allowTouchMove: false,
    }
}
});

function addHandlers(count) {
  var minus = count.querySelector(".quanity-down");
  var number = count.querySelector(".quanity");
  var plus = count.querySelector(".quanity-up");
  plus.addEventListener("click", function() {
    number.innerText++;
  });
  minus.addEventListener("click", function() {
    if(number.innerText < 2) {
      number.innerText = 1;
    } else {
      number.innerText--;
    }
  });
}  

var counts = document.querySelectorAll(".product__input");
counts.forEach(addHandlers);



