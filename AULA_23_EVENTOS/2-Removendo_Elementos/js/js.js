
//let btn = document.querySelector('button');

// //1- removendo com a função settimeout
// function msg (){
// console.log('funcionando');
// }

// btn.addEventListener('click', msg)

// setTimeout(function () {
//     btn.removeEventListener('click', msg)


// }, 10000)

//2-REMOVENDO COM OUTRO BOTÃO

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function msg (){
console.log('funcionando');
}

btn1.addEventListener('click', msg)

btn2.addEventListener('click', function () {

    btn1.removeEventListener('click', msg)
})