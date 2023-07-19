let num1 = 10
let num2 = 11
let num3 = 12
let num4 = 13
let num5 = 14
let num6 = 15

function testoperator(...args) {
for (let i = 0; i<args.length; i++) {
console.log(args[i]);

}
}

testoperator(num1, num2, num3, num4, num5, num6)
testoperator(5, 10, 23, 24, 26, 56) //não precisa, necessariamente colocar os que estão na variável

