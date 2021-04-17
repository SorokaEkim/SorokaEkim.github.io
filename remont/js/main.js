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

changesvg();