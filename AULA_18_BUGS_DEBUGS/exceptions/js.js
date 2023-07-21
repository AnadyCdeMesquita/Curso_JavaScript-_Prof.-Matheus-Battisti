
function excecaoErros(numero){
if(typeof numero != 'number'){
 throw new Error('somente numeros')
} else{
 return numero
}
}

console.log(excecaoErros('kkkkk'))
console.log(excecaoErros(5))