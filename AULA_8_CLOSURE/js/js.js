
//CLOSURE - LEMBRA DA SOMA DA PRIMEIRA FUNÇÃO

// function vamosSomar(x){
//  return (y)=>{
// return x + y
// }
// }

// let total = vamosSomar(3)
// console.log(total(5))

function contador(i){
 let cont = i 
 function somarcontador(){
console.log(cont)
cont ++

 }
 return somarcontador
}

let meucontador = contador(10)
meucontador()
meucontador()