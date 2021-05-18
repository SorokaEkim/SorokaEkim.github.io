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

// Счетчик товаров
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

// Open and close popup
const popupMenu   = document.querySelector('.popups');
      openPopup   = document.querySelector('.header__register');
      openPopup2  = document.querySelector('.header__register2');
      closePopup  = document.querySelector('.popup-log__close');
      sections    = document.querySelectorAll('section')

      popupLogMenu = document.querySelector('.popup-log');
      popupRegMenu = document.querySelector('.popup-reg');
      popupPasMenu = document.querySelector('.popup-password');

      popupRegClose  = document.querySelector('.popup-reg__close');
      popupPasClose  = document.querySelector('.popup-password__close');
      popupRegOpen   = document.querySelector('.popup-reg__login');
      popupPasOpen   = document.querySelector('.popup-reg__password');

      openPopupReg = document.querySelector('.popup-log__registred');
      openPopupPas = document.querySelector('.popup-log__password');

      openPopupLog  = document.querySelector('.popup-pas__login');
      openPopupReg2 = document.querySelector('.popup-pas__registed');
      
// Открытие блока с popups
openPopup.onclick = function() {
  popupMenu.classList.toggle('hidden');
  sections.forEach(element => {
    element.classList.add('opacity-20')
  });
};

// Открытие блока с popups(мобильная версия)
openPopup2.onclick = function() {
  popupMenu.classList.toggle('hidden');
  sections.forEach(element => {
    element.classList.add('opacity-20')
  });
}; 

// Закрытиe блока popups 
closePopup.onclick = function() {
  popupMenu.classList.toggle('hidden');
  sections.forEach(element => {
    element.classList.remove('opacity-20')
  });
}

// Закрытиe блока popup, через блок "Регистрация"
popupRegClose.onclick = function() {
  popupLogMenu.classList.remove('hidden');
  popupMenu.classList.toggle('hidden');
  sections.forEach(element => {
    element.classList.remove('opacity-20')
  });
}

// Закрытие блока popup, через блок "Сброс пароля"
popupPasClose.onclick = function() {
  popupMenu.classList.add('hidden')
  popupRegMenu.classList.remove('hidden')
  popupLogMenu.classList.remove('hidden')
  sections.forEach(element => {
    element.classList.remove('opacity-20')
  });
}

// Открытие блока "Регистрация" через блок "Войти"
openPopupReg.onclick = function() {
  popupLogMenu.classList.add('hidden');
};

// Открытие блока "Войти" через блок "Регистрация"
popupRegOpen.onclick = function() {
  popupLogMenu.classList.remove('hidden')
}

// Открытие блока "Сброс пароля" через блок "Войти"
openPopupPas.onclick = function() {
  popupLogMenu.classList.add('hidden')
  popupRegMenu.classList.add('hidden')
}

// Открытие блока "Сброс пароля" через блок "Регистрация"
popupPasOpen.onclick = function() {
  popupRegMenu.classList.add('hidden')
}

// Открытие блока "Войти" через блок "Сброс пароля"
openPopupLog.onclick = function() {
  popupLogMenu.classList.remove('hidden')
  popupRegMenu.classList.remove('hidden')
}

// Открытие блока "Регистрация" через блок "Сброс пароля"
openPopupReg2.onclick = function() {
  popupRegMenu.classList.remove('hidden')
}

// Открытия блока с заявкой
const requestMenu  = document.querySelector('.request');
      requestClose = document.querySelector('.request__close');
      requestOpen  = document.querySelector('.header__btn');

requestOpen.onclick = function() {
  requestMenu.classList.remove('hidden');
  sections.forEach(element => {
    element.classList.add('opacity-20')
  });
}

// Закрытие блока с заявкой
requestClose.onclick = function() {
  requestMenu.classList.add('hidden');
  sections.forEach(element => {
    element.classList.remove('opacity-20')
  });
}

// Вертикальное меню
var accordion = (function (element) {
  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content
    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault(); // отменям стандартное действие
      // получаем необходимые данные
      var header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_items, 'show');
      if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
        item.classList.add('show');
      } else {
        // удаляем класс show у ткущего элемента
        itemActive.classList.remove('show');
        // если следующая вкладка не равна активной
        if (itemActive !== item) {
          // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        }
      }
    },
    _setupListeners = function () {
      // добавим к элементу аккордиона обработчик события click
      _mainElement.addEventListener('click', _actionClick);
    };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }
  }
})();

var accordion1 = accordion();
accordion1.init('#accordion');

// Открытие фильтра

const openFilter = document.querySelector('.open-filter__btn');
      menuFilter = document.querySelector('.catalog__filter');

openFilter.onclick = function() {
  menuFilter.classList.toggle('hidden');
};      









