//CASO QUEIRA INSERIR UMA NOVA TAG DEOIS DE OUTRA TAG, DENTRO DE UM ELEMENTO-PAI

// let novoElemento = document.createElement("p");
// //let velhoElemento = document.querySelector("#paragrafo-principal");
// let elementopai = document.querySelector("footer")

// elementopai.appendChild(novoElemento); 


// let textoElemento = document.createTextNode('testando texto')
// novoElemento.appendChild(textoElemento);


let novoElemento = document.createElement("p");
let velhoElemento = document.querySelector("#paragrafo-principal");

let elementopai = velhoElemento.parentNode

elementopai.appendChild(novoElemento);

