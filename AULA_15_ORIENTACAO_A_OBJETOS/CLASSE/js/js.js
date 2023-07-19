let caneta ={

    cor: 'vermelha',
    ponta: 'fina',


}

let caneta2 = Object.create(caneta)
caneta2.cor = 'azul'

console.log(caneta)
console.log(caneta2)
