// function soma(a,b) {
//         if(a === undefined || b === undefined){
//         console.log("Esta função precisa de 2 argumentos");
//         } else {
//         return a+b;
//         }
//     }

//     console.log(1)
//     console.log(soma(1,2));

// function nomedocidadao (nome, idade){
//  if(nome === undefined){
// console.log('Seu nome é:' + nome)
// } else {
//  console.log('Seu nome é:' + nome + ' idade:' + idade)
// }
// }

// nomedocidadao('mateus')
// nomedocidadao('mateus', 10)

//ARGUMENTO VALOR DEFAULT DEFAULT //math.pow(10,2)

function potencia(base, exp=2){
    return Math.pow(base, exp)
}

console.log(potencia(5))

console.log(potencia(5,5))