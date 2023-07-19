class Mamifero{
constructor(patas){
    this.patas = patas;
}

}

class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas,patas)
        this.raca = raca
    }
}

let Pug = new Cachorro(4, 'pug')

console.log(Pug)    

console.log(new Cachorro instanceof Mamifero)