///////////////////TREINANDO///////////////////////////
// let aluno = {
//     nome: 'Fernando',
//     idade: 17,
//     série: 5,
//     pai: 'Antonio Mendes',
//     aprovacao: function (nota){
//         if (nota >=6){
//         console.log('passou')
//      } else {
//         console.log('vc foi reprovado')
//     }
//     }

// }



// console.log(aluno.nome)
// console.log(aluno.idade)
// aluno.aprovacao(5)


// let time = {

//     clube: 'Fortaleza',
//     presidente: 'Marcelo Paz',
//     técnico: 'Vojvoda',
//     jogadores: 23,
//     melhor_jogador: 'Gualhardo',
//     campeonato: function (copas){
//         if (copas == 'Copa do Nordeste' || copas == 'Copa do Brasil'){
//          console.log ('Nós seremos campeões')
//         } else{
//         console.log ('Nós seremos vice')
//         }
    
//     }

// }

// console.log(time.clube)
// console.log(time.presidente)
// time.campeonato('Copa do Nordeste')
// time.campeonato('Campeonato Brasileiro')

// let fiscal = {

//     nome: 'Fernando',
//     idade: 62,
//     aposentado: 'não',
//     tempoDeFiscalizacao: 41,
//     aposentadoria: () => { 
//         return 'Vc já pode se aposentar'

//     }

// }
// console.log(fiscal.aposentadoria())

// let filme ={

//     nome: 'Star Wars',
//     ator: 'Harrison Ford',
//     Melhor_Personagem: 'Baby Yoda',

// }
////////////////////////////////////////////////////////////////////////
//deletando uma propriedade

// delete filme.ator
// console.log(filme.ator)
//////////////////////////////////////////////////////////////////////
//adicionando uma propriedade

// filme.atriz = 'Princesa Léa'

// console.log(filme.atriz)
/////////////////////////////////////////////////////////////////////
//Object.assign(filme, filme2) ---JUNTANDO DOIS OBJETOS----

// let aluno = {
//     nomeAluno:'John',
//     idadeAluno: 15,
//     nota: 10,
// }

// let professor ={

//     nomeProf: 'Fernando',
//     disciplina: 'Geografia',
//     idadeProf: 50,


// }

// Object.assign(professor, aluno)

// console.log(professor)
/////////////////////////////////////////////////////////////////
//Object.keys ----INFORMA O NÚMERO DE CHAVES

// let celular = {

// marca: 'Samsung',
// modelo: 'S20',
// cor: 'azul,'

// }

// console.log(Object.keys(celular))
/////////////////////////////////////////////////////////////


//MUTAÇÃO
//obs: na mutação quando se altera um objeto tambem se mexe no objeto que foi criado a partir dele

let celular1 ={
marca: 'Samsung',

}

celular2 = celular1

//o objeto celular3 te a mesma propriedade do celular1, mas não são iguais
 let celular3 ={
marca: ' Samsung',
}
//console.log(celular2)

celular2.cor = 'vermelho'

//console.log(celular2)

celular1.modelo = 's22'
console.log(celular2)





