
function verificarNumero(num) {
return new Promise(function(resolve, reject) {
if (num ===2){
return resolve(console.log('Resposta certa'))

}else{
 return reject(new Error('resposta errada'));
}

})
}

verificarNumero(2)
verificarNumero(3)

