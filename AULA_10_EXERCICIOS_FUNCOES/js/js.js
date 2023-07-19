// EXERCICIO 1

// function helloMundo() {
// console.log('hello world');
// }

// helloMundo()

//  EXERCICIO 2

// function helloMundo (idade){
// console.log('Você tem ' + idade + ' anos')
// }

// helloMundo(20)
// helloMundo(40)
// helloMundo(72)

// EXERCICIO 3

// function twoNumbers (idade, dataNascimento) {
//     return idade + dataNascimento
// }

// console.log(twoNumbers(42, 1980))

//  exercicio 4

// function numberAleatorio(){
//  return Math.round(Math.random() * 61)
// }

// console.log(numberAleatorio(n))

// exercicio 4.1
// function numberAleatorio(n){
//      return Math.round(Math.random() * 61 + n)
//      }
    
//     console.log(numberAleatorio(5))
//     console.log(numberAleatorio(10))
//     console.log(numberAleatorio(8))

//EXERCICIOS 5

// function idadeAutoEscolar(idade){
//     if(idade>=18){
//      return 'Você tem ' + idade + ' anos, já pode se matricular'
//     } else{
//     return 'Você tem' + idade + ' anos,  não pode se matricular'
//     }
// }

// console.log(idadeAutoEscolar(20))
// console.log(idadeAutoEscolar(17))

// function idadeAutoEscolar(idade){
//     if(idade>=18){
//      console.log('Você tem ' + idade + ' anos, já pode se matricular')
//     } else{
//     console.log ('Você tem' + idade + ' anos,  não pode se matricular')
//     }
// }

// idadeAutoEscolar(20)
// idadeAutoEscolar(17)

//EXERCICIOS 6

// function advinhacao(dado){
// if (typeof dado==='string'){
//  console.log('É uma string')
 
// } else if (typeof dado ==='number'){
//     console.log('É um number')
// } else if (typeof dado ==='boolean'){
//     console.log('É um boolean')

// }
// }

// advinhacao('hello world')
// advinhacao(true)
// advinhacao(13)


// EXERCICIOS 6.1

// function corVestido(cor){
// if ( cor == 'red') {
//     return 'Esse é a cor do vestido'
// } else if ( cor == 'green')
//     return 'Esse é a cor da calça'

// }

// console.log(corVestido('red'))
// console.log(corVestido('green'))

//EXERCICIO 7  Math.abs = conversão de uma número negativo para positivo

// function numberNegativo (n){
//  return Math.abs(-n)
// }

// console.log(numberNegativo(-50))
// console.log(numberNegativo(-35.5))

//EXERCICIO 8

// function TamanhoString (medicao){
// if (medicao.length > 10){
// console.log('Texto muito grande, você é um prolixo.')
// }
// else if (medicao.length <= 10){
//     console.log('Texto muito curto.')
// }
// }

// TamanhoString('mariadosocorrofreitas')
// TamanhoString('boneca')

//EXERCICIO 9 MATH.POW = (2,4) - RESPECTIVAMENTE BASE E POTENCIA

// function potenciacao(m, n=2){
//     console.log(Math.pow(m, n))

// } 

// potenciacao(3,5)
// potenciacao(5,)

function decrementar(n){
for(let i= n; i>0; i--){
    if(i%2 == 0){
    console.log('Este número é par' + i)}
    }
}

decrementar(20)