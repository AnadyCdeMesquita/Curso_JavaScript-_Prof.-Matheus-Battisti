

let promessa = Promise.resolve(8)

promessa.then((value) => {console.log(5 + value)})
promessa.then((value) => {console.log(10 + value)})