'use strict'

const txt_color = document.getElementById('txtcolor');
const btn = document.getElementById('btn__toggle__color');
const letras = ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']
let colors = [];

btn.addEventListener('click', () => {
    let color = txt_color.value.toUpperCase();
    if (color == '' && colors.length == 0) {
        alert('Digite um número.');
        txt_color.focus();
    } else if (color.length > 7 || color.length < 6 || notExatHex(color) == true) {
        alert('Está cor não existe. Verifique novamente');
    } else if (color.includes('#') === false) {
        let code = `#${txt_color.value}`;
        toggleColor(code);
    } else {
        toggleColor(color);
    }
});

function notExatHex (color) {
    let not_exat = false;
    letras.forEach(letra => {
        if (color.includes(letra) == true) {
            not_exat = !not_exat;
        }
    })
    return not_exat;
};

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
    if (checkColor(toggle_color) == true) {
        document.body.style.backgroundColor = toggle_color;
    } else {
        let key = colors.indexOf(toggle_color);
        document.body.style.backgroundColor = colors[key];
    }
};