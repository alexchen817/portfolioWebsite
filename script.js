let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // hamburger menu will change to 'x;
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}