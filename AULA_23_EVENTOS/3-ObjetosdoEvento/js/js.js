let btn1 = document.getElementById('btn1');
//let btn2 = document.getElementById('btn2');

function msg1(e) {
console.log(e)
}

btn1.addEventListener('click', msg1)

btn2.addEventListener('click', function(e){
    console.log(e)


})