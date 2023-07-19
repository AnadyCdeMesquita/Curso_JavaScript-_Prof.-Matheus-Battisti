class Cachorro{

constructor(name){
    this.name = name;
    
}

get verName(){
   return this.name
}
set novoNome(nomenovo){
this.name = nomenovo;

}

}

let Cachorro2 = new Cachorro('pastor alemão');

console.log(Cachorro2.verName); //só para consultar

Cachorro2.novoNome = 'vira lata'

 console.log(Cachorro2)