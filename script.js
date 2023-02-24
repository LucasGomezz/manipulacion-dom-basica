
// console.log(input.value);

// console.log({
//     title,
//     p,
//     parrafito,
//     pid,
//     input
// });

//Cambiar el titulo del HTML

// title.innerHTML = 'Patito <br> Feo';
// title.innerText = 'Patito <br> Feo';

// console.log(title.getAttribute('class'));
// title.setAttribute('class', 'rojo');

// title.classList.add('rojo');
// title.classList.remove('verde');
// title.classList.toggle('rojo');
// title.classList.constains('rojo'); true or false

// input.value = "456";


// console.log(document.createElement('img'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_889,w_1585,x_9,y_74/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/a/9/a9ae7820f2d362981e194ab38616f96a10ab7bd6/reporter-provides-worrisome-steph-curry-update.jpg');

// pid.innerHTML = "";
// pid.appendChild(img);

const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resuelto = document.querySelector('#resultado');
const form = document.querySelector('#form');


// onclick="btnOnClick()" en HTML
// function btnOnClick(){
//     const sumaInput = input1.value + input2.value
//     resuelto.innerText = 'Resultado: ' + sumaInput;
// };

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    //console.log({event})
    event.preventDefault();
    const sumaInput = input1.value + input2.value
    resuelto.innerText = 'Resultado: ' + sumaInput;
};

const prueba = document.querySelector('#prueba');
let respuesta = document.querySelector('#respuesta');

prueba.addEventListener('keydown', escribirEnRespuestas);

function escribirEnRespuestas(event){
    let respuestas = prueba.value;
    respuesta.innerText = 'Respuestas: ' + respuestas;
}




