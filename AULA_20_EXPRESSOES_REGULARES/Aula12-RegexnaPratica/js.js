
// let validandoDominio = /[www].\w+\.com|.com.br/

// console.log(validandoDominio.test('www.google.com'))
// console.log(validandoDominio.test('www.r7.com'))


//não consegui com o ? na frente do www para ser opcional

let validandoDominioOpcional = /[?www.]\w+\.com|.com.br/

console.log(validandoDominioOpcional.test('caixa.com'))
console.log(validandoDominioOpcional.test('itau.com'))

//validando email
let email = /\w+@\w+\w+/

console.log(email.test('anady@gmail.com'))


let datas = /\d{2}-\d{2}-\d{4}/ // qualquer data aceita

console.log(datas.test('11-05-1980'))

//não deu certo regex com data precisa
let dataprecisa = /[0-31]{2}[/][0-12]{2}[/][1900-2023]{4}/

console.log(dataprecisa.test('11/05/2024'));
console.log(dataprecisa.test('11/05/2022'));