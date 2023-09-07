
class Produtos{
constructor(nome, preco){
this.nome = nome;
this.preco = preco;
}

descontopreco(desconto){
return this.nome + '  ' + this.preco * ((100 - desconto) / 100)
}

}

let produto1 = new Produtos('camisa', 220.00)

console.log(produto1.descontopreco(30))


