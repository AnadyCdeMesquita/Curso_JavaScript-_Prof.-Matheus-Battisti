
// filter com arrays
let testefilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filtrar = testefilter.filter((n) => {   
return n >= 3
})

console.log(filtrar)

//filter com objetos

const users =[
{ nome: 'matheus', available: true},
{ nome: 'pedro', available: false},
{ nome: 'joão', available: false},
{ nome: 'marcos', available: true},
]

const availableusers = users.filter((user) => {
return user.available
})

console.log(availableusers)

