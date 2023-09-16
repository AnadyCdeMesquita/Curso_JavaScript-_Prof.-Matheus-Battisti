
let a = document.querySelector('a')

a.addEventListener('click', function(e){
e.preventDefault()
//não realiza o métod default do click

console.log('não consegue clicar')

});