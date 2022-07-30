"use strict"
const attributesDiv = ["question", "question__add", "question__icons"];
const attributesI = ["fa-regular fa-2xl  fa-trash-can", "fa-regular fa-2xl fa-square-plus"];
let ListQuestion = 0;
$(document).ready(function(){
    updateNumbers();
    
})

function ativeBtnExit() {
    $('.panel__shadow, #panel__question').css('display', 'none');
    $('html').css('overflow', 'initial');
}

function ativeBtnAddQuestion() {
    if ($('#txtp').val() == "") {
        alert("Não é possível adicionar, você precisa digitar a sua pergunta.");
    } else {
        addAsk($('#txtp').val());
    }
}

function ativeBtnTrash(pos) {
    if (ListQuestion == 0) {
        alert('Não é possível excluir, é necessário uma caixa de pergunta');
    } else {
        let element = $('.fa-trash-can');
        let qtd = $('.fa-trash-can').length;
        qtd--;
        let key = qtd-pos;
        $(element[key]).parentsUntil('.container').remove();
        ListQuestion--;
        updateNumbers();
    }
}

function toggleBtnTrash(pos) {
    let element = $('.question__add');
    let qtd = $('.question__add').length;
    qtd--;
    let key = qtd-pos;
    if ($(element[key]).find('.fa-trash-can').css('display') == "none") {
        $(element[key]).find('.fa-trash-can').css('display', 'block');
    } else {
        $(element[key]).find('.fa-trash-can').css('display', 'none');
    }
}

function ativeBtnSquare() {
    $('.panel__shadow, #panel__question').css('display', 'block');
    $('html').css('overflow', 'hidden');
}

function updateNumbers(){
    let c = $('.question').length;  //5
    let el = $('.question'); //4
    let key = --c; //4
    let reverObj = reverseObject(key)
    for(let cont=0; cont <= c; cont++){        
        $(el[reverObj[cont]]).find('.question__add').attr('ondblclick', `toggleBtnTrash(${cont})`)
    }
}

function reverseObject(qtd){
    let arrayOb = new Array();
    for(let q=qtd; q >= 0; q--){
        arrayOb.push(q)
    }
    return arrayOb;
}

function addAsk(quest) {
    if (ListQuestion == 0) {
        $('.question__add').find('p').text(quest);
        ListQuestion++;
    } else if (ListQuestion > 0) {
        let div1 = $('<div></div>').addClass(attributesDiv[0]);
        let div2 = $('<div></div>').attr({
            'class': `${attributesDiv[1]}`,
            'ondblclick': `toggleBtnTrash(${ListQuestion})`
        });
        let div3 = $('<div></div>').addClass(attributesDiv[2]);
        let i1 = $('<i></i>').attr({
            'class': attributesI[0],
            'onclick': `ativeBtnTrash(${ListQuestion})`
        });
        let i2 = $('<i></i>').attr({
            'class': attributesI[1],
            'onclick': 'ativeBtnSquare()'
        });
        $(div1).prepend(div2);
        $(div2).prepend(`<p>${quest}</p>`);
        $(div2).append(div3);
        $(div3).append(i1);
        $(div3).append(i2);
        $('.container').prepend(div1);
        ListQuestion++
        updateNumbers()
    }
};