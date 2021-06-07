const burgerMenu = document.querySelector('.burger-menu__wrap');
      open       = document.querySelector('.header__toggle');
      close      = document.querySelector('.burger-menu__close');

open.onclick = function openMenu() {
  burgerMenu.classList.add('show');
}

close.onclick = function closeMenu() {
  burgerMenu.classList.remove('show')
}