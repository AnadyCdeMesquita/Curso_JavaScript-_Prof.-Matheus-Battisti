function racaCachorro (raca, patas, cor){
let cachorro =({})
cachorro.raca = raca
cachorro.patas = patas
cachorro.cor =  cor
cachorro.latir = function(){
console.log('au au')
}
return cachorro
}

let cachorro2 = racaCachorro('doberman', 4, 'preta')

cachorro2.latir()

console.log(cachorro2)