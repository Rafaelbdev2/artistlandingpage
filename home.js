const hambMenu = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('.mobile__menu')

hambMenu.addEventListener('click', togglemenu);


function togglemenu() {
    mobileMenu.classList.toggle('inactive');

}
