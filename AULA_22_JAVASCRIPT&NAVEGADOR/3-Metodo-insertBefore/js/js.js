
let span = document.createElement('span');
let velhoElemento = document.querySelector('#titulo');
let elementopai = document.querySelector('div');

elementopai.insertBefore(span, velhoElemento);

let textoElemento = document.createTextNode('testando texto')

span.appendChild(textoElemento);