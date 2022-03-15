'use strict'

const txt_color = document.getElementById('txtcolor');
const btn = document.getElementById('btn__toggle__color');

let colors = [];

btn.addEventListener('click', () => {
    if (txt_color.value == '' && colors.length == 0) {
        alert('Digite um número.');
        txt_color.focus();
    } else {
        toggleColor(txt_color.value);
    }
});

function checkColor(check_color){
    if (colors.indexOf(check_color) == -1) {
        colors.push(check_color);
        return true;
    } else {
        return false;
    }
};

function toggleColor(toggle_color) {
    toggle_color = toggle_color.toLowerCase();
    toggle_color = toggle_color.replaceAll(' ','');
    if (checkColor(toggle_color) == true) {
        document.body.style.backgroundColor = toggle_color;
    } else {
        let key = colors.indexOf(toggle_color);
        document.body.style.backgroundColor = colors[key];
    }
};