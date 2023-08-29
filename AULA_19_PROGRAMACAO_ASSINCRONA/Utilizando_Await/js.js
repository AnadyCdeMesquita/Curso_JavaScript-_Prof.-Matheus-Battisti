
function somaComDelay(a,b){
return new Promise(function(resolve){
    setTimeout(function(){
        resolve(a+b)
        
    }, 5000)

});
}

async function soma(a,b,c,d){
let x = somaComDelay(a,b)
let y = somaComDelay(c,d)

return await x + await y
}
soma(2,4,6,8).then(value => console.log(value))