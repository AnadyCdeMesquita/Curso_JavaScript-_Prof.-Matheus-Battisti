
let p1 = new Promise(function(resolve, reject){

setTimeout(function(){
    resolve(20)
}, 5000);

})  

let p2 = Promise.resolve(5)

let p3 = new Promise(function(resolve, reject){
    resolve(10)

})

Promise.all([p3, p2, p1]).then((values) => console.log(values)) 