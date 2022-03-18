const menuToggle = document.querySelector('div.menu__toggle');
const menuMobile = document.querySelector('div.menu__mobile');
const headerSpace = document.querySelector('div#header__conteiner');
let menu_active = true;


menuMobile.addEventListener('click', () => {
    menuToggle.classList.toggle('on');
    headerSpace.style.padding = menu_active ? '2rem 2rem 18rem 2rem' : '2rem';
    menu_active = !menu_active;
});
