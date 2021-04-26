const burger  = document.querySelector('.header__burger');
      menu    = document.querySelector('.header__links');
      menuImg = document.querySelector('#menu');
let toogle = false;
function changesvg(){
  burger.addEventListener('click', () => {

    if(toogle===true){
      menu.classList.remove('display');
      menuImg.src="./images/list.svg";
      }else{
        menu.classList.add('display');
        menuImg.src="./images/delete.svg";
      }
      toogle = !toogle
  })
}

$(document).ready(function() {
  $('.accordion__trigger').click(function(){
    $(this).next('.accordion__content').slideToggle(200);
  })
})

changesvg();