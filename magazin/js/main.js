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
    if(number.innerText < 1) {
      number.innerText = 0;
    } else {
      number.innerText--;
    }
  });
}  

var counts = document.querySelectorAll(".product__input");
counts.forEach(addHandlers);
      
// Открытия блока с заявкой
const requestMenu  = document.querySelector('.request');
      requestClose = document.querySelector('.request__close');
      requestOpen  = document.querySelector('.header__btn');
      sections    = document.querySelectorAll('section');

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

// Открытие корзины
const basketWindow = document.querySelector('.basket');
      buttonBasket = document.querySelector('.header__basket');
      closeBasket  = document.querySelector('.basket__footer-btn-close');
      closeBas     = document.querySelector('.basket__footer-btn')
      body         = document.querySelector('body')

buttonBasket.onclick = function() {
  basketWindow.classList.remove('hidden');
  body.classList.add('overflow-hidden')
  sections.forEach(element => {
    element.classList.add('opacity-20')
  });
};
// Закрытие корзины
closeBasket.onclick = function() {
  basketWindow.classList.add('hidden');
  body.classList.remove('overflow-hidden')
  sections.forEach(element => {
    element.classList.remove('opacity-20')
  });
}

// Закрытие корзины через "Оформить заказ"
closeBas.onclick = function() {
  body.classList.remove('overflow-hidden')
}

// Открытие чертежа
const drawing    = document.querySelector('.drawing');
      minDrawing = document.querySelector('.product__drawing');
      drawingClose = document.querySelector('.drawing__close')

minDrawing.onclick = function() {
  drawing.classList.remove('hidden');
  sections.forEach(element => {
    element.classList.add('opacity-20')
  });
}

// Закрытие чертежа
drawingClose.onclick = function() {
  drawing.classList.add('hidden');
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

// Фильтр цен
const rangeSlider = document.getElementById('range-slider');
      input0      = document.getElementById('input-0');
      input1      = document.getElementById('input-1');
      inputs      = [input0, input1];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [100, 10000],
    step: 1,
    connect: true,
    range: {
        'min': [100],
        'max': [10000]
    }
  });

  rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    
    rangeSlider.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    })
  })

}
