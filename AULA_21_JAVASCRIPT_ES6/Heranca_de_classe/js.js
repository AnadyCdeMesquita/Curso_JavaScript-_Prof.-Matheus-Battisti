
class Fiscal{
constructor(nome, matricula){
this.nome = nome;
this.matricula = matricula;
}
aposentar(idade){
   if(idade>60){
   return this.nome + ' de matrícula: ' + this.matricula + ' terá que se aposentar.'
   }else{
   return 'precisa trabalhar mais um pouco'
   }

}
}

let f1 = new Fiscal('Anady', 72335)
console.log(f1.aposentar(61))

class FiscaisNovatos extends Fiscal{
constructor(nome, matricula, raca, altura){
  
   super(nome, matricula);
   this.raca = raca;
   this.altura = altura;
}

OsDiarias(quantidade){
   super.aposentar(65)/// posso colocar aqui ou chamar apenas abaixo essa funcao sem esse super aqui
   if(quantidade >= 5){
   return "Fiscais Antigo"
   }else{
   return "Fiscais Novos"
   }
   }

}

let f2 = new FiscaisNovatos('Antonio', 88888, 'branca', 1.80)
f2.OsDiarias(2)
console.log(f2)


