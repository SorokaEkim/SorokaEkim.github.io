// Animations

// Header
gsap.from(".header__description", {duration: 1, y:400});
gsap.from(".header__title", {duration: 1, opacity: 0, delay: 1});
gsap.from(".header__btn-left", {duration: 1.1, x:-500});
gsap.from(".header__btn-right", {duration: 1.1, x:500});

let tl = gsap.timeline({delay: 1.2});

tl.to(".block-1", {duration: 0.2, opacity: 1})
  .to(".block-2", {duration: 0.2, opacity: 1})
  .to(".block-3", {duration: 0.2, opacity: 1});

// Mobile Menu

const menuBtn   = document.querySelector('.header__burger');
const menuMobie = document.querySelector('.burger-menu__list');
let menuOpen    = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuMobie.classList.add('show');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobie.classList.remove('show');
        menuOpen = false;
    }
})

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true
  });