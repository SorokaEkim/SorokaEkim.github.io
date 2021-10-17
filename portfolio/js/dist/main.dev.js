"use strict";

var menuBtn = document.querySelector('.nav__btn');
var menuMobie = document.querySelector('.burger-menu__list');
var content = document.querySelector('.content');
var menuOpen = false;
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuMobie.classList.add('show');
    content.classList.add('content-blur');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuMobie.classList.remove('show');
    content.classList.remove('content-blur');
    menuOpen = false;
  }
});