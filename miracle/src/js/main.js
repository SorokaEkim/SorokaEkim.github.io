
// TYPED.JS Набор текста
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});

// MatchHeight
$('.row-match-height > li > div').matchHeight();
$('.slider-match-height > div > .block > .item').matchHeight();

// Navbar
let navbar = document.getElementById('navbar');
let activeClass = "border-b";
let activeClass2 = "border-gray-border";
window.addEventListener('scroll', e => {
    if(scrollY > 0) {
        navbar.classList.add(activeClass);
        navbar.classList.add(activeClass2);
    } else navbar.classList.remove(activeClass);
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
        768: {
            slidesPerView: '2',
            spaceBetween: 40,
         },
        1200: {
           slidesPerView: '3',
           spaceBetween: 40,
        },
     }
});

Fancybox.bind('[data-fancybox]', {
    groupAll: true,
}); 

$(function(){
    $('.phone-mask').intlTelInput({
        utilsScript: "/assets/phonecode/js/utils.js",
        geoIpLookup: function(callback) {
            $.get("https://ipinfo.io?token=fc5ee11400f8c2", function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
         });
        },
        hiddenInput: "full_number",
        initialCountry: "auto",            
        separateDialCode: true,
    });
});

let openMobileSearch = function () {
    let openSearchBtn = document.querySelector('.mobile-search-btn'),
        inputBody = document.querySelector('.mobile-search-body');
        closeSearchBtn = document.querySelector('.mobile-search-close');

        openSearchBtn.addEventListener('click', openSearch);
        closeSearchBtn.addEventListener('click', closeSearch);

        function openSearch() {
            inputBody.classList.remove('hidden');
        }

        function closeSearch() {
            inputBody.classList.add('hidden');
        }
}

openMobileSearch();


let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContents = document.querySelector('.tabs__content'),
        tabContent = document.querySelectorAll('.tab'),
        tabsMenu = document.querySelector('.tabs__nav'),
        
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });


    function selectTabNav() {
        

        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {

        tabContents.classList.remove('translate-x-[0]');
        tabContents.classList.add('translate-x-[-100%]');

        tabsMenu.classList.remove('translate-x-[0]');
        tabsMenu.classList.add('translate-x-[-100%]');
        tabsMenu.classList.remove('px-[30px]');

        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.remove('hidden') : item.classList.add('hidden');
            
        })
    }

};

let openMobileSearchTwo = function () {
    let openSearchBtn = document.querySelector('.mobile-search-btn-2'),
        inputBody = document.querySelector('.mobile-search-body-2');
        closeSearchBtn = document.querySelector('.mobile-search-close-2');

        

        openSearchBtn.addEventListener('click', openSearch);
        closeSearchBtn.addEventListener('click', closeSearch);

        function openSearch() {
            inputBody.classList.remove('hidden');
        }

        function closeSearch() {
            inputBody.classList.add('hidden');
        }
}

openMobileSearchTwo();

let closeTab = function () {
    let tabsMenu = document.querySelector('.tabs__nav'),
        tabContents = document.querySelector('.tabs__content'),
        buttonsClose = document.querySelectorAll('.menu_close');

        buttonsClose.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        function closeMenu() {
            tabsMenu.classList.remove('translate-x-[-100%]');
            tabsMenu.classList.add('translate-x-[0]');

            tabContents.classList.add('translate-x-[0]');
            tabContents.classList.remove('translate-x-[-100%]');

            tabsMenu.classList.add('px-[30px]');
        }

};


tab();
closeTab();


$('.js-modal-btn').on('click', ()=>$('.js-modal').arcticmodal());
