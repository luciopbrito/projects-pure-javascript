const menuToggle = document.querySelector('div.menu__toggle');
const menuMobile = document.querySelector('div.menu__mobile');

menuMobile.addEventListener('click', () => {
    menuToggle.classList.toggle('on');
});
