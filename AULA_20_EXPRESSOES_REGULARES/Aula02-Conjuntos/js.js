
const reg1 = /[123]/

console.log(reg1.test('Essa frase tem o numero 6'))
console.log(reg1.test('Essa frase tem o numero 25'))
console.log(reg1.test('Essa frase tem o numero 23'))
console.log(reg1.test('Essa frase tem o numero 29'))

//obs: Se o numero está entre o numero 123, dará true, mas por exemplo, colocar o número iniciando com 60, dará false.

const reg2 = /[1-9]/

console.log(reg2.test('Essa frase tem o número 8'))
console.log(reg2.test('Essa frase tem o número 65'))