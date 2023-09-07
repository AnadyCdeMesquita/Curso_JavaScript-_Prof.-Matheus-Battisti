
//INSERIR O NÚMERO DE OCORRÊNCIA ENTRE {}
console.log('NUMERO DE TELEFONE')
const reg4 = /\d{4}-\d{4,5}/  

console.log(reg4.test('4444-4444'))
console.log(reg4.test('4444-444'))
console.log(reg4.test('11'))
console.log(reg4.test('2019'))
console.log(reg4.test('1122aaaa'))
console.log(reg4.test('555'))
console.log(reg4.test('6666666'))


console.log('NUMERO DE TELEFONE COM DDD')

const reg5 = /\(\d{3}\)\d{4}-\d{4}/ 

console.log(reg5.test('(085)4444-2023'))
console.log(reg5.test('(085)4444-202399'))
console.log(reg5.test('aaaaa'))
console.log(reg5.test('123'))
console.log(reg5.test('aaaa12'))
console.log(reg5.test('a12aa123') && 'a12aa123'.length == 3)
console.log(reg5.test('aaa'))


