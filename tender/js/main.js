// Animations
AOS.init();

// Header
gsap.from(".header__description", {duration: 1, y:400});
gsap.from(".header__title", {duration: 1, opacity: 0, delay: 1});


let tl = gsap.timeline({delay: 1.2});

tl.to(".block-1", {duration: 0.2, opacity: 1})
  .to(".block-2", {duration: 0.2, opacity: 1})
  .to(".block-3", {duration: 0.2, opacity: 1});

// Mobile Menu

const menuBtn   = document.querySelector('.header__burger');
const menuMobie = document.querySelector('.burger-menu__list');
const menuLinks = document.querySelectorAll('selector');
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

// Swiper2
var swiper2 = new Swiper(".mySwiper2", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
});

// Accordeon

const accordionQuestion = document.querySelector('.question');
const accordion = document.querySelector('.accordion');
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionQuestion.addEventListener('click', () => {
  accordion.classList.toggle('accordion-show');
})

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

// Navigations
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    menuMobie.classList.remove('show');
    menuBtn.classList.remove('open');
    menuOpen = false;
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
