
//METODO POP() - EXCLUI O ULTIMO ELEMENTO NO FINAL
//METODO PUSH() - ADICIONA NO FINAL UM OU MAIS ELEMENTOS

// let metodosArray = [5, 10, 20, 34];

// metodosArray.pop();




// metodosArray.pop();
// metodosArray.push(50,35, 80, 60);

// console.log(metodosArray)

//-------------------------------------

//SHIFT - EXCLUI O PRIMEIRO ELEMENTO NO INÍCIO
//UNSHIFT - INCLUI UM OU MAIS ELEMENTO NO INÍCIO

// let dogs = ['pittbul', 'dalmatas', 'vira-latas', 'poodles']

// dogs.shift()

// dogs.unshift('chachau','pastor-alemão')

// console.log(dogs)

///----indexof() para descobrir o índice, o indexlastof, ultimo elemento, ou caso, tenha algum repetido,
//como no exemplo abaixo

 //let numerais =[0, 1, 10, 15, 20, 15, 17]

//console.log(numerais[2]) - descobrir o elemento
// console.log(numerais.indexOf(1)) descobrir o index
// console.log(numerais.lastIndexOf(15))

////----MÉTODOS SLICE----//// //OS NÚMEROS -NEGATIVOS, PEGA OS ÚLTIMOS NÚMEROS

let testeSlices = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//  console.log(testeSlices.slice(2,5)) // TRATA-SE DO 2 INDEX, 5-1 = 4 INDEX

// console.log(testeSlices.slice(4,6))

// console.log(testeSlices.slice(7))

//   console.log(testeSlices.slice(-5)) //PEGA OS ÚLTMOS NÚEMROS

// console.log(testeSlices.slice(5, -3))

//MÉTODO FOREACH // O LOOP DE UM ARRAY É PARECIDO COM O FOREACH

// let numerais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// numerais.forEach((numeros)=>{
// console.log(numeros)
// })

// let carros = ['escort', 'monza', 'comodoro', 'argo','uno']

// carros.forEach((car)=>{
//     console.log(car)
// })

// let temperature =['calor', 'quente', 'frio', 'seco']

// for(let i=0; i<temperature.length; i++){
// console.log(temperature[i])
// }

//INCLUDES - RETORNA TRUE OU FALSE, VERIFICA SE HÁ ELEMENTO EM UMA ARRAY

// let cores = ['azul', 'amarelo', 'verde', 'vermelho']

// console.log(cores.includes('azul'));

// console.log(cores.includes('preto'));

///MÉTODO REVERSE - REVERTER OS ELEMENTOS DO ARRAY

// let cores = ['azul', 'amarelo', 'verde','preto','vermelho']

// console.log(cores.reverse());

//MÉTODO STRING - TRIM - REMOVE TUDO QUE NÃO É STRING

// const greeting = '   Hello world!   ';

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// // Expected output: "Hello world!";

//MÉTODO STRING - Padstat - insere característica na frente da string

// let palavra = '222'

// console.log(palavra.padStart(7, '0'))

// console.log(palavra.padEnd(7, '0'))

//MÉTODO SPLIT - DIVIDIR UMA STRING EM UMA ARRAY 

// let frase = 'anady vai trabalhar com javaSCRIPT';

// console.log(frase.split(' '))
// let palavras = 'anady;carvalho;de;mesquita';

// console.log(palavras.split(';'))

///MÉTODOS JOIN O método join() junta todos os elementos de um array  em uma string e retorna esta string.

    // let juntando = ['um', 'dois', 'tres', 'segundo']

    // console.log(juntando.join('baby'))

    //MÉTODOS REPEAT

    // let result = 'vamos sair'

    // console.log(result.repeat('8'))
    