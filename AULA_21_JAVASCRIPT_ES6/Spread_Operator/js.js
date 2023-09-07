//SPREAD SERVE TANTO PARA OBJETOS COMO PARA ARRAY

//1- ARRAY

let carro =['gol', 'monza', 'palio', 'argo']

let marcas =['volks', 'GM', 'FIAT', 'FIAT']


//posso colocar mais valores entre spread ou depos
let carro2 =[...carro,'corrola','nivus',...marcas]

// console.log(carro2)

//2- OBJETOS

let objetos1 ={
nome: 'anady',
idade: 43,
altura: 1.68,
cor: 'parda',
nascimento:11.05
}

let objetos2 ={
   nmome2: 'Fernando',
   age: 62,
   hight: 1.8,
   color: 'parda'

   }

   let objetos3 = {...objetos1, ...objetos2}

   console.log(objetos3)