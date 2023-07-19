
//Object.getPrototypeOf() pega um objeto e o copia de forma identica
//ao pai. O Object Pai nativo do JavaScript é Object.

// let pessoa ={

// maos:2,


// }

// console.log(Object.getPrototypeOf(pessoa))

// console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

let carro ={

cor: 'verde',
portas: 4,

}

//console.log(Object.getPrototypeOf(carro))

let carro2 = Object.create(carro)

console.log(carro2)

console.log(Object.getPrototypeOf(carro2) == carro)