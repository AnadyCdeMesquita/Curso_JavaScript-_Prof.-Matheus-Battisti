function Cachorro (patas, nome, cor){
    this.patas = patas;
    this.nome = nome;
    this.cor = cor;

}

Cachorro.prototype.uivar = function(){
console.log('uuuuuu')
}

Cachorro.prototype.latir = function(){
    console.log('aaauuuuuu')
    }
    

let cachorro2 = new Cachorro(4, 'husky', 'preto')

cachorro2.uivar()
cachorro2.latir()

