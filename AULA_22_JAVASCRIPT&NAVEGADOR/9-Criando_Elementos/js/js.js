
let novoElemento = document.createElement('ul');
let elementoPai = document.getElementById('elementos');

elementoPai.appendChild(novoElemento);

for (let i = 0; i < 5; i++) {

    let lista = document.createElement('li');
    lista.innerHTML = 'vamos codar' + i;
    novoElemento.appendChild(lista)

}

