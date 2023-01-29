//EVENTO MENU

const burguerIcon = document.querySelector('#burguer-icon');
const menuMobile = document.querySelector('.menu-mobile');

burguerIcon.addEventListener('click', showMenuMobile);

function showMenuMobile(){
  menuMobile.classList.toggle('inactive');
}
