
function* genTest(){
let id = 0;
while(true) {
    yield id++
}
}

let CriarId = genTest();

console.log(CriarId.next().value)
console.log(CriarId.next().value)
console.log(CriarId.next().value)