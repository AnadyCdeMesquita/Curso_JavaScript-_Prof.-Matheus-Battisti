
let novoElemento = document.createElement('h1');
novoElemento.innerHTML = 'substituindo'
let velhoElemento = document.querySelector('#mudando');

let pai = velhoElemento.parentNode
pai.replaceChild(novoElemento, velhoElemento);