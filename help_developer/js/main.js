// Burger
const menuBtn = document.querySelector('.header__burger');
let menuOpen  = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

// Search
const searchBtn  = document.querySelector('.hero__search-btn'),
      searchForm = document.querySelector('.hero__form-wrap');
let searchOpen = false;


searchBtn.addEventListener('click', () => {
	if(!searchOpen) {
		searchForm.classList.add('show');
		searchOpen = true;
	} else {
		searchForm.classList.remove('show');
		searchOpen = false;
	}
})

// Swiper
var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });
  