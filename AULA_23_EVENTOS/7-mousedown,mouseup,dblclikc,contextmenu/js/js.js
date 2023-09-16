
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('mousedown', function(){
    console.log('apertou o botão');


})

btn2.addEventListener('mouseup', function(){
    console.log('soltou o botão');


})

btn3.addEventListener('dblclick', function(){
    console.log('duplo clique');


})

btn4.addEventListener('contextmenu', function(e){
    e.preventDefault();


})