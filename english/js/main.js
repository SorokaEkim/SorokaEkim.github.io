// Burger menu
const burgerMenu = document.querySelector('.burger-menu__wrap');
      open       = document.querySelector('.header__toggle');
      close      = document.querySelector('.burger-menu__close');

open.onclick = function openMenu() {
  burgerMenu.classList.add('show');
}

close.onclick = function closeMenu() {
  burgerMenu.classList.remove('show');
}

// Sviper Services
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
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
      spaceBetween: 30
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

// Navigations
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    burgerMenu.classList.remove('show');
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}







