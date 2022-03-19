'use strict'

const btn_modal = document.getElementById('btn');
const modal = document.querySelector('div.modal__msg');
const modal_shadow = document.querySelector('div.modal__shadow')
const btn_exit = document.getElementById('btn__exit');

btn_modal.addEventListener('click', () => {
    modal.style.display = 'block';
    modal_shadow.style.display = 'block';
});

btn_exit.addEventListener('click', () => {
    modal.style.display = 'none';
    modal_shadow.style.display = 'none';
});