// let cachorro = {
//     latir: function () {
//         console.log("au au")


//     }

// }

// cachorro.latir()

// let animal ={

//     gato: function () {
//         console.log("miau")
//         },
    
//     pato: function () {
//         console.log("qua qual")
//     },

// }

// animal.gato()
// animal.pato()


// let cores ={

//     vermelho: 'claro',
//     azul: function (cor) {
// return this.vermelho = 'escuro'

//     },

// }

// console.log(cores.azul('escuro'))

// let res ={
// total: 20,
// contas: function (valor) {
// return  this.total + valor

// }

// }

// console.log(res.contas(50))

let res ={
total: 20,
contas: function () {
let teste = (valor) => {
    return this.total + 20

}

},

}


console.log(res.contas(50))