let promiseErrada = promise.resolve(new Error('Algo deu errado'));

console.log('O show tem que continuar');

promiseErrada.then((value) => console.log(value));

promiseErrada.catch(reason => console.log('Erro' + reason))