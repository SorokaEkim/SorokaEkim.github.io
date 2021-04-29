const open    = document.querySelector('.header__burger');
      menu    = document.querySelector('.header__burger-menu');

open.onclick = function() {
  menu.classList.toggle('menu__active')
  open.classList.toggle('burger__active')
}



