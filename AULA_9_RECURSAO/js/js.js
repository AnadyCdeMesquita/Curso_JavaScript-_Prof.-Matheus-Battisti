function recursao(n){
if (n - 1 < 2){
console.log('não é recusão')

} else if (n%2 != 0){
    console.log('É um número IMPAR' + n)
    recursao (n-1)

} else {
    console.log('é número par' + n)
    recursao(n-2)
}

}

recursao (10)
recursao (5)
recursao (7)