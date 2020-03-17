'use strict';
const nombre='mariaclara restrepo';

console.log('El nombre de mi compañera es maria clara restrepo, y está compuesto por '+nombre.length+ ' caracteres');

document.querySelector('body').innerHTML =`<h1>El nombre de mi compañera es maria clara restrepo, y está compuesto por {nombre.length}  caracteres</h1>`;