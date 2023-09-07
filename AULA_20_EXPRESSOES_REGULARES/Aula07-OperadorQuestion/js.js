//FAZ COM QUE O CÓDIGO ANTERIOR SEJA OPCIONAL

console.log('LETRA d')
const reg4 = /\d?/


console.log(reg4.test('11'))
console.log(reg4.test('2019'))
console.log(reg4.test('1122aaaa'))
console.log(reg4.test('555'))
console.log(reg4.test('6666666  '))


console.log('LETRA w')
const reg5 = /\d+\w?/

console.log(reg5.test('aaaaa'))
console.log(reg5.test('123'))
console.log(reg5.test('aaaa12'))
console.log(reg5.test('a12aa123'))
console.log(reg5.test('aaa'))


