

let btn = document.querySelector('button');
let p = document.querySelector('#propagacao');

function msg(e){
console.log('clique aqui')
e.stopPropagation()
}

btn.addEventListener('click', msg);

p.addEventListener('click', () => {
    console.log('clicando')
}); 