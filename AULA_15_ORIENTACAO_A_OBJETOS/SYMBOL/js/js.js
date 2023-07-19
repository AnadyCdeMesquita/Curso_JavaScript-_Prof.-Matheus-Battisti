class Cachorro{

constructor(raca){
this.raca =raca;

}

}

let patas = Symbol()

Cachorro.prototype[patas] = 4

let cachorro2 = new Cachorro('Golden Retriver')

console.log(cachorro2)
console.log(cachorro2[patas])