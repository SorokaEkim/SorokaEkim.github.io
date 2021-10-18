const menuBtn   = document.querySelector('.nav__btn');
const menuMobie = document.querySelector('.burger-menu__list');
const content   = document.querySelector('.content');
let menuOpen    = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuMobie.classList.add('show');
        content.classList.add('content-blur')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobie.classList.remove('show');
        content.classList.remove('content-blur')
        menuOpen = false;
    }
})
