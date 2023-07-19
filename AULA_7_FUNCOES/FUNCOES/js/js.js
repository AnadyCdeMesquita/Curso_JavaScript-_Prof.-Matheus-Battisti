// function imprimirNoConsole(){
//  console.log("Olá Mundo")

// }

// imprimirNoConsole()

// function imprimirNumero(numero) {   
//     console.log("O número é " + numero)
// }

// imprimirNumero(5)
// imprimirNumero(10)
// imprimirNumero(15)
// imprimirNumero(20)

// let variavel = function Testando() {
//  console.log(Math.random()*10)
// }

// variavel()

// function multiplicarTresNumeros(x, y, z) {
//     return x * y * z
// }

// console.log(multiplicarTresNumeros(10,20, 30))


// let test =  multiplicarTresNumeros(2,3,10)

// console.log(test)

// function boraDirigir(idade, CNH){
//  if (idade >=18 && CNH == 1){
//  console.log('Pode dirigir')
//  } else {
//  console.log('Não pode dirigir')
// }
// }
//  console.log(boraDirigir(18, 1))
//  console.log(boraDirigir(10, 0))
//  console.log(boraDirigir(25, 1))

 /////// ESCOPO ///////////


//  let n = 10;

//  function testeEscopo(){
//     let n = 15
//     console.log(n)
//  }

//  testeEscopo()
//  console.log(n)

// let x= 10

// if(x >5){
// let x=20
// x++
// console.log(x)
// }

// console.log(x)

// // há dois escopos um da variável(global) e o outro do if


// let b = 10

// function Multiplicar(x, y){
//     let b = x * y

//     console.log(b)
// }

// Multiplicar(2, 2)
// console.log(b)

//ESCOPO MAIS ELABORADO//

let a = 5

function MultiplicarNovo(x, y){
    let a = x * y
    a++
   
    if(a > 10){
        let a= 0
        a++
        console.log(a)
    }

    console.log(a)
}

MultiplicarNovo(5, 5)

console.log(a)
