'use strict'

const btn_surprise = document.querySelector('button.btn__random');
const btn_back = document.querySelector('i.back');
const btn_next = document.querySelector('i.next');
const element_image = document.getElementById('img__person');
const element_name = document.querySelector('h2.name');
const element_ocupation = document.querySelector('h3.ocupation');
const element_resume = document.querySelector('p.resume');
let professional = [
    {
        name: 'Ricardo',
        surname: 'Almeida',
        sexo: 'M',
        ocupation: 'web design',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/homem1.png'
    },
    {
        name: 'Adriana',
        surname: 'Sevioli',
        sexo: 'F',
        ocupation: 'Tatuadora',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/mulher1.png'
    },
    {
        name: 'Richard',
        surname: 'Brito',
        sexo: 'M',
        ocupation: 'telemarkting',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/homem2.png'
    },
    {
        name: 'Ana Maria',
        surname: 'Silva',
        sexo: 'F',
        ocupation: 'Professora',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/mulher2.png'
    },
    {
        name: 'Vitor',
        surname: 'Balconi',
        sexo: 'M',
        ocupation: 'Fotografo',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/homem3.png',
    },
    {
        name: 'Carolina',
        surname: 'Campos',
        sexo: 'F',
        ocupation: 'Psicóloga',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/mulher3.png'
    },
    {
        name: 'Fernando',
        surname: 'Albuquerque',
        sexo: 'M',
        ocupation: 'Advogado',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/homem4.png'
    },
    {
        name: 'Maria',
        surname: 'Cândido',
        sexo: 'F',
        ocupation: 'pedagoga',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/mulher4.png'
    },
    {
        name: 'Filipe',
        surname: 'Santiago',
        sexo: 'M',
        ocupation: 'Criador de conteúdo',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/homem5.png'   
    },
    {
        name: 'Bárbara',
        surname: 'Queiroz',
        sexo: 'F',
        ocupation: 'culinarista',
        resume: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aspernatur veniam sequi incidunt nemo ipsa sed architecto obcaecati? Ullam cumque tempore neque tempora aspernatur fugit aliquam aliquid ex repudiandae sit!',
        img: './img/mulher5.png'
    }
]
let position_array = "";

createApresent(randomApresent());

btn_surprise.addEventListener('click', () => {
    createApresent(randomApresent());
});

btn_back.addEventListener('click', () => {
    createApresent(backApresent(position_array));
});

btn_next.addEventListener('click', () => {
    createApresent(nextApresent(position_array));
});

function nextApresent(position) {
    if (position == professional.length -1) {
        return position = 0;
    } else {
        return position = ++position;
    }
}


function randomApresent() {
    return Math.floor(Math.random() * professional.length)
}

function createApresent(position) {
    position_array = position;
    let pessoa = professional[position];
    let {name: pName, surname: pSurname, sexo: pSexo, ocupation: pOcupation, resume: pResume, img: pImg = 'indefinido'} = pessoa
    let nome_completo = joinName(pName, pSurname);
    createImg(pImg, nome_completo, pSexo);
    createName(nome_completo);
    createOcupation(pOcupation);
    createResume(pResume);
}

function backApresent(position) {
    if (position == 0) {
        return position = professional.length - 1;
    } else {
        return position = --position;
    }
}

function createResume(resume) {
    element_resume.innerHTML = resume; 
}

function createOcupation (ocupation) {
    element_ocupation.innerHTML = ocupation;
}

function createName(name) {
    element_name.innerHTML = name; 
}

function createImg(imagem, name, sexo) {
    element_image.setAttribute('src', imagem);
    if (sexo == 'M') {
        element_image.setAttribute('alt', `foto do ${name}`);
    } else {
        element_image.setAttribute('alt', `foto da ${name}`);
    }
}

function joinName(name, sname) {
    return `${name} ${sname}`;
}