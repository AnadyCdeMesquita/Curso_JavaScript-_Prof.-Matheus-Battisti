
// EXERCICIO 1
// let carros = ['argo', 'santana','palio', 'S10', 'subaru']

// console.log(carros[1])
// console.log(carros[2])
// console.log(carros[3])

//EXERCICIO 2

// let cores = ['vermelha', 'preta']

// for(let i= 0; i<=cores.length; i++){
// console.log(cores[i])


// let idades = [ 17, 28, 16, 25]

// console.log(cores.indexOf('vermelha'))
// console.log(cores.lastIndexOf('preta'))

// console.log(idades.lastIndexOf(25))

// console.log(cores.length)
// console.log(idades.length)

//EXERCÍCIOS 3

// let onibus = {

// rodas: 8,
// limitePassageiros: 40,
// portas: 2,

// }

// // console.log(onibus.rodas)
// // console.log(onibus.limitePassageiros)
// // console.log(onibus.portas)

// delete onibus.rodas

// onibus.janelas = 20

// console.log(onibus.janelas)

// console.log(onibus)

//EXERCICIO 4

// let names = ['anady', 'mary', 'diego', 'thais', 'cris']

// if(names.includes('anady')){
// console.log('existe sim')
// }

// // console.log(names.includes('anady'))
// // console.log(names.includes('rodrigo'))

//EXERCICIO 5 

// let names = ['anady', 'mary', 'diego', 'thais', 'teka']
// let numbers = [ 15, 30, 24, 37, 89, 78]

// function elements(arr){
//     if( arr.length <=5){
//     console.log('Poucos elementos')
//     } else {
//     console.log('Muitos elementos')
//     }

// }

// elements(names)
// elements(numbers)

//EXERCICIOS 6

// let arrrays = ['ana', 'dan', 'bebe','lara', 'baby'];
//  for(let i = 0; i < arrrays.length; i++){
// console.log(arrrays[i]);
// }

//EXERCICIOS 7

// let jsonTeste ={

// "nome": "anady",
// "age": 18,
// "Estado Civil": "divorciada",

// }

// console.log(jsonTeste.nome)
// console.log(jsonTeste.age)

// console.log(jsonTeste)

// let jsontostring = JSON.stringify(jsonTeste)

// console.log(jsontostring)


// let stringtoJson = JSON.parse(jsontostring)

// console.log(stringtoJson)


//EXERCICIO 8

 let frase = 'A vida não está fácil é preciso coragem'

 let palavras = frase.split(' ')

console.log(palavras)

// for(let i = 0; i < palavras.length; i++) {
//     console.log(palavras[i])
// }

//EXERCICIO9

// let calculadora ={
//  soma: function(a, b){
// return a+b
// },
// subtracao: function(a, b){
//     return a-b
// },
// multiplicacao: function(a, b){
//     return a*b
// },

// divisao: function(a, b){
//     return Math.floor(a/b)
// },
// }

// console.log(calculadora.soma(5,6))
// console.log(calculadora.subtracao(5,6))
// console.log(calculadora.multiplicacao(5,6))
// console.log(calculadora.divisao(5,6))


// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
