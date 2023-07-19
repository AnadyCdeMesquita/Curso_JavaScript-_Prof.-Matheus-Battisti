//EXERCÍCIO 1
/*CRIE UMA CLASS QUE SIMULA UMA CONTA NO BANCO (UTILIZE A FORMA QUE PREFERIR)
 DEVE CONTER A PROPRIEDADE SALDO E OS MÉTODOS DE DEPÓSITO E SAQUE, TESTE OS MÉTODOS*/

// class Conta{
// constructor (saldo){
// this.saldo = saldo;
// }

// deposito(valor){
// this.saldo += valor;

// }

// saque(valor2){
// this.saldo -= valor2;
// }
// }

// let conta = new Conta(1000)

// conta.deposito(200)
// conta.saque(300)

// console.log(conta)

//EXERCÍCIOS 2 NÃO FIZ

// class CarrinhoCompra{
// constructor(itens, quantitytotals, valortotal){
//     this.itens = itens;
//     this.quantitytotals = quantitytotals;
//     this.valortotal = valortotal;
// }

//EXERCÍCIOS 3

/*CRIE UM OBJETO QUE SIMULA UM ENDEREÇO DO CLIENTE, PROPRIEDADES: RUA, BAIRRO, CIDADE E ESTADO
NO CONSTRUTOR, O ENDEREÇO JÁ DEVE SER DEFINIDO POR COMPLETO. CRIE MÉTODOS PARA ATUALIZAR TODAS AS PROPRIEDADES*/

// class Endereco {
//     constructor(rua, bairro, cidade, estado) {

//         this.rua = rua;
//         this.bairro = bairro;
//         this.cidade = cidade;
//         this.estado = estado;

//     }
//     set novaRua(novaRua) {
//         this.rua = novaRua;
//     }

//     set novoBairro(novoBairro) {
//         this.bairro = novoBairro;
//     }

//     set novaCidade(novaCidade) {
//         this.cidade = novaCidade;
//     }

//     set novoEstado(novoEstado) {
//         this.estado = novoEstado;
//     }
// }

// let endereco = new Endereco('Rua João Melo', 'Damas', 'Fortaleza', 'Ceara')

// endereco.novaRua = 'Rua das Pimentas'
// endereco.novoBairro = 'Papicu'
// endereco.novaCidade = 'Taua'
// endereco.novoEstado = 'Sao Paulo'

// console.log(endereco)

//TESTES
// class Cachorro{
// constructor(patas, cor){
// this.patas = patas
// this.cor = cor

// }

// racudo(racas){
// this.racas = racas

    
// }

// }


// let animals = new Cachorro (4, 'preto')

// animals.raca = 'poodle' 
// animals.patas = 3

// console.log(animals)

// let filme = {
//     pelicula: 'O silêncio dos Inocentes',
// }

// console.log(filme)

// let filme2 = Object.create(filme)

// console.log(filme2.pelicula)

// filme2.pelicula = 'Phênix'

// console.log(filme2)

//EXERCÍCIOS 4

// class Carro{
// constructor(marca, cor, gasolineRestante, consumo){
// this.marca = marca;
// this.cor = cor; 
// this.gasolineRestante = gasolineRestante;
// this.consumo = consumo; 
// }

// diminuirGasoline(km) { 

//     let litrosConsumidos = km/this.consumo

//     this.gasolineRestante -= litrosConsumidos  

// }
// abastecer(abastecer1) {
//    this.gasolineRestante += abastecer1    
// }

// }

// let carroMovimento = new Carro('wolks', 'preto', 50, 10)
// carroMovimento.diminuirGasoline(20)
// carroMovimento.abastecer(30)

// console.log(carroMovimento)

class Conta{
constructor( saldoCorrente, saldoPoupanca, JurosPoupanca){
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.JurosPoupanca = JurosPoupanca;
}

Sacar(saque){
this.saldoCorrente -= saque

}

Depositar(deposito){
    this.saldoCorrente += deposito
    
    }

transferir(transfer){
this.saldoPoupanca -= transfer
this.saldoCorrente += transfer

}

juros(){
let jurosConta = this.saldoCorrente * (this.JurosPoupanca/100)

this.saldoCorrente += jurosConta

}

}

class ContaSpecial extends Conta{
    constructor( saldoCorrente, saldoPoupanca, JurosPoupanca){
        super(saldoCorrente, saldoPoupanca, JurosPoupanca*2)
    
        }
}



let contaBanco = new Conta(200, 100, 2)
contaBanco.Sacar(10)
contaBanco.Depositar(20)
contaBanco.transferir(10)
contaBanco.juros()

console.log(contaBanco)

//A NOVA CONTA PEGA AS MESMAS PROPRIEDADES DA CONTA MÃE, NÃO PRECISA MAIS CRIAR MÉTODO

let conta2 = new ContaSpecial(5000, 2000, 2)

console.log(conta2)

conta2.juros()
conta2.Sacar(3000)

console.log(conta2)