
const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('aked'))
console.log(notab.test('ab'))
console.log(notab.test('abc'))


console.log('NOTTAB1')
const notab1 = /[^a-z]/

console.log(notab1.test('a'))
console.log(notab1.test('aked111111111aaaaaa')) // houve intervalo
console.log(notab1.test('ab'))
console.log(notab1.test('abc'))