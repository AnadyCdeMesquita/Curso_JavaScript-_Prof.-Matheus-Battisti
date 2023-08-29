
// const reg1 = /[123]/

// console.log(reg1.test('Essa frase tem o numero 6'))
// console.log(reg1.test('Essa frase tem o numero 25'))
// console.log(reg1.test('Essa frase tem o numero 23'))
// console.log(reg1.test('Essa frase tem o numero 29'))

// //obs: Se o numero está entre o numero 123, dará true, mas por exemplo, colocar o número iniciando com 60, dará false.

// const reg2 = /[1-9]/

// console.log(reg2.test('Essa frase tem o número 8'))
// console.log(reg2.test('Essa frase tem o número 65'))

console.log('ponto')
const reg3 = /./

console.log(reg3.test('Essa 12345 999 bababba'))
console.log(reg3.test('Essa 12345 999 bababba'))
console.log(reg3.test('12345 999 bababba'))
console.log(reg3.test('Essa bababba'))
console.log(reg3.test('123456'))
console.log(reg3.test(''))


console.log('LETRA d')
const reg4 = /\d/

console.log(reg4.test('Essa 12345 999 bababba'))
console.log(reg4.test('12345 999 bababba'))
console.log(reg4.test('Essa bababba'))
console.log(reg4.test('123456'))
console.log(reg4.test(''))


console.log('LETRA w')
const reg5 = /\w/

console.log(reg5.test('Essa 12345 999 bababba'))
console.log(reg5.test('12345 999 bababba'))
console.log(reg5.test('Essa bababba'))
console.log(reg5.test('123456'))
console.log(reg5.test(''))


console.log('LETRA W')

const reg6 = /\W/  //maiúsculo significa negação = caractere não alfa-numérico

console.log(reg6.test('Essa 12345 999 bababba'))
console.log(reg6.test('12345 999 bababba'))
console.log(reg6.test('Essa bababba'))
console.log(reg6.test('123456'))
console.log(reg6.test(''))

console.log('LETRA D')

const reg7 = /\D/  //maiúsculo significa negação = caractere não SEJAM DÍGITOS

console.log(reg7.test('Essa 12345 999 bababba'))
console.log(reg7.test('12345 999 bababba'))
console.log(reg7.test('Essa bababba'))
console.log(reg7.test('123456'))
console.log(reg7.test(''))

console.log('LETRA S')

const reg8 = /\S/  //maiúsculo significa CARACTERE QUE NÃO SEJA ESPAÇO EM BRANCO
console.log(reg8.test('Essa 12345 999 bababba'))
console.log(reg8.test('12345 999 bababba'))
console.log(reg8.test('Essa bababba'))
console.log(reg8.test('123456'))
console.log(reg8.test(''))

console.log('LETRA s')

const reg9 = /\s/ 
console.log(reg9.test('Essa 12345 999 bababba'))
console.log(reg9.test('1234599bababba'))
console.log(reg9.test('Essa bababba'))
console.log(reg9.test('123456'))
console.log(reg9.test(''))