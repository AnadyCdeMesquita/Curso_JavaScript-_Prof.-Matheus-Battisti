
//1-validar maiúscula
let maiuscula = /[A-Z]/

console.log(maiuscula.test('so letra minuscula'));

console.log(maiuscula.test('SÓ LETRA MAIUSCULA'));

//2- Criar uam regex que só aceite strings terminadas com ID

console.log('ID')
let id = /\d+ID\b/

console.log(id.test('anadyID'));

console.log(id.test('123BONECAID'));
console.log(id.test('anadyID'));

console.log(id.test('12356ID'));

//3- criar uam regex que aceita a seguinte expressao: 'marca: nome da marca'
console.log('MARCAS')

let marca = /\W (puma|nike|ascis)/

console.log(marca.test('marca: bic'));
console.log(marca.test('marca: nike'));
console.log(marca.test('marca: puma'));

//4- criar uam regex que aceita a seguinte expressao: 'marca: nome da marca'
console.log('IP')

let ip = /\d{1,3}.\d{1}.\d{1}.\d{1}/ //{3}- quantidade maxima de caracteres 1 a 3

console.log(ip.test('127.0.0.0'));
console.log(ip.test('1.0.0.0'));

// 5- criar uam regex que aceita a seguinte expressao: aceita 
// letras de a-z,_ e - numeros de 0 a 9, minimo de 3 caracteres 
// e maximo de 16

console.log('NOME')
let nome2 = /^(?=.{3-16}$[a-z0-9-_])/
let nome = /[a-z]-\d[0-9]{3,16}/

console.log(nome.test('anady-1234567'));
console.log(nome.test());
console.log(nome.test());

console.log(nome2.test('anady1234567_'));