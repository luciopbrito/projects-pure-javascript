'use strict'

const txt_color = document.getElementById('txtcolor');
const btn_add = document.getElementById('btn__add');
const btn_alternate = document.getElementById('btn__alternate');
const alterColor = [].slice.call(document.getElementsByClassName('alterColorJs'));

let colorCurrent;
let colors = [];

btn_add.addEventListener('click', () => {
    toggleColor(txt_color.value);
});

btn_alternate.addEventListener('click', () => {
    randomColor(colorCurrent);
})

function checkColor(cColor){
    if (cColor == '' && colors.length == 0) {
        alert('Não há cores disponíveis, adicione uma cor');
        txt_color.focus();
    } else if (colors.indexOf(cColor) == -1) {
        //caso não exista, adicione
        colors.push(cColor);
        return true;
    } else {
        return false;
    }
};

function randomColor(rColor) {
    if (rColor == undefined) {
        alert('Não há cores disponíves, adicione uma cor');
        txt_color.focus();
    } else {
        if (colors.length > 1 ) {
            let rKey = Math.floor(Math.random() * colors.length);
            let verify_color = colors.indexOf(rColor);
            if (verify_color != rKey) {
                document.body.style.backgroundColor = colors[rKey];
                colorCurrent = colors[rKey];
            } else {
                randomColor(colorCurrent);
            }
        } else {
            alert('Não é possível alterna, apenas uma cor foi adicionada.');
        }
    }
    AlternateForWhite()
}

function AlternateForWhite() {
    if (colorCurrent == 'black') {
        alterColor.forEach( e => {
            e.style.color = 'white';
        });
    } else {
        alterColor.forEach( element => {
            element.style.color = 'black';
        });
        alterColor[0].style.color = 'white';
    }
}

function toggleColor(tColor) {
    tColor = tColor.toLowerCase();
    tColor = tColor.replaceAll(' ','');
    if (checkColor(tColor) == true) {
        document.body.style.backgroundColor = tColor;
        colorCurrent = tColor;
    } else if (tColor != "" && colorCurrent != tColor) {
        let tKey = colors.indexOf(tColor);
        document.body.style.backgroundColor = colors[tKey];
        colorCurrent = colors[tKey];
    } else if (tColor == colorCurrent) {
        alert('Cor em uso');
    }
    AlternateForWhite()
}