const hambMenu = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('.mobile__menu')
const btn1 = document.querySelector('#twitter');
const btn2 = document.querySelector('#facebook');
const btn3 = document.querySelector('#instagram');
const btn4 = document.querySelector('#youtube');
const btn5 = document.querySelector('#tiktok');
const btn6 = document.querySelector('#spotify');

hambMenu.addEventListener('click', togglemenu);
btn1.addEventListener('click', btnOnclick1);
btn2.addEventListener('click', btnOnclick2);
btn3.addEventListener('click', btnOnclick3);
btn4.addEventListener('click', btnOnclick4);
btn5.addEventListener('click', btnOnclick5);
btn6.addEventListener('click', btnOnclick6);


function togglemenu() {
    mobileMenu.classList.toggle('inactive');

}



function btnOnclick1() {
    window.open ("https://x.com/ro_violin");
}

function btnOnclick2() {
    window.open ("https://www.facebook.com/profile.php?id=61561922064558");
}

function btnOnclick3() {
    window.open ("https://www.instagram.com/rafael_osmav/?hl=es-la");
}

function btnOnclick4() {
    window.open ("https://www.youtube.com/channel/UCo7Uj3yeKiPXs6OjBSTWvzA");
}

function btnOnclick5() {
    window.open ("https://www.tiktok.com/@ro_violin");
}

function btnOnclick6() {
    window.open ("https://spotify.com");
}