

console.log('LETRA d')
const reg4 = /\d\d/

console.log(reg4.test('11'))
console.log(reg4.test('2019') && '2019'.length== 2)
console.log(reg4.test('1122aaaa') && '1122aaaa' != 'number')
console.log(reg4.test('555'))
console.log(reg4.test('6666666') && '6666666'.length == '2')


console.log('LETRA w')
const reg5 = /\w\w\w/

console.log(reg5.test('aaaaa'))
console.log(reg5.test('123'))
console.log(reg5.test('aaaa12'))
console.log(reg5.test('a12aa123') && 'a12aa123'.length == 3)
console.log(reg5.test('aaa'))


