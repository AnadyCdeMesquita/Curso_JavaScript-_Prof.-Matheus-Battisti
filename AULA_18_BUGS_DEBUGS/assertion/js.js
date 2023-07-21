let arr = [1, 2, 3]

//caso o let arr = [1, 2, 3], a resposta seria 'O array está vazio '

function iterarArray(arr){
    if(arr.length == 0){
throw new Error('O array está vazio')
} else{
for(var i=0; i<arr.length; i++){
    console.log(i)
}  
}
}
iterarArray(arr)
