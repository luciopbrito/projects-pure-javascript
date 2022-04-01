'use strict'

const txt_color = document.getElementById('txtcolor');
const btn_add = document.getElementById('btn__add');
const letras = ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
const btn_alternate = document.getElementById('btn__alternate');
const alterColor = [].slice.call(document.getElementsByClassName('alterColorJs'));
let colors = [];
let colorCurrent;

btn_add.addEventListener('click', () => {
    verifColor(txt_color.value);
});

btn_alternate.addEventListener('click', () => {
    randomColor(colorCurrent);
})

function verifColor(color) {
    color = color.toUpperCase();
    if (color === '' && colors.length === 0) {
        alert('Digite um número.');
        txt_color.focus();
    }  else if (color.length > 7) {
        alert('Está cor não existe. Verifique novamente');
    } else if (color.includes('#') === false) {
        setHash(color);
    } else {
        toggleColor(color);
    } 
}

function setHash(shColor) {
    if (notExatHex(shColor) === true) {
        if (shColor.length === 3) {
            let shArray = shColor.split('');
            let returnArray = "";
            shArray.forEach(value => {
                returnArray += value + value;
                shColor = returnArray;
            });
        }
        shColor = `#${shColor}`;
        toggleColor(shColor);
    } else {
        return alert('Está cor não existe. Verifique novamente');
    }
}

function notExatHex (color) {
    let not_exat = true;
    letras.forEach(letra => {
        if (color.includes(letra) === true) {
            not_exat = !not_exat;
        }
    })
    return not_exat;
};

function toggleColor(tColor) {
    if (checkColor(tColor) === true) {
        document.body.style.backgroundColor = tColor;
        colorCurrent = tColor;
    } else {
        let key = colors.indexOf(tColor);
        document.body.style.backgroundColor = colors[key];
        colorCurrent = colors[key];
    }
    alternateForWhite();
};

function checkColor(cColor){
    if (colors.indexOf(cColor) === -1) {
        colors.push(cColor);
        return true;
    } else {
        return false;
    }
};

function alternateForWhite() {
    if (colorCurrent === '#000000') {
        alterColor.forEach( element => {
            element.style.color = 'white';
        });
    } else {
        alterColor.forEach( element => {
            element.style.color = 'black';
        });
        alterColor[0].style.color = 'white';
    }
}

function randomColor(rColor) {
    if (rColor === undefined) {
        alert('Não há cores disponíves, adicione uma cor');
        txt_color.focus();
    } else {
        if (colors.length > 0) {
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
    alternateForWhite()
}