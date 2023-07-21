
function checarDados(numero){
let number = Number(numero);
if(Number.isNaN(number)){
return null;
} else{
return number;
}
}


console.log(checarDados(5));

console.log(checarDados('teste'));

let number = prompt('digite somente numeros')
console.log(checarDados(number));


