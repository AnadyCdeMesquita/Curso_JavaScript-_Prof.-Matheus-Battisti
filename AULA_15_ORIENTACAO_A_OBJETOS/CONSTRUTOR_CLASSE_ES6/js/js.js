// class Cachorro{
// constructor (raca){
// this.raca =raca;

// }

// }

// let cachorro2 = new Cachorro('Labrador');

// console.log(cachorro2.raca);

//MAIS SOBRE CLASS

class Cachorro{

constructor(raca, name){  
    this.raca =raca;
    this.name = name;  

}

latir(){
console.log('au au')

}
}
Cachorro.prototype.patas = 4;

let cachorro3 = new Cachorro('dalmata', 'pop')

console.log(cachorro3.patas)
cachorro3.latir()
