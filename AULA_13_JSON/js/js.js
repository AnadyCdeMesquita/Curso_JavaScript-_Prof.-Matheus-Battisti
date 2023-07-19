// ARQUIVOS JSON NÃO SE COLOCA COMENTÁRIOS E NEM ESCREVE ASPAS DUPLAS
// let pagamento= {

// "name": "anady",
// "age": 24,
// "ocupação":"Civil Sevent",
// }

// console.log(pagamento.name)

// CONVERTENDO JSON PARA STRING E STRING PARA JSON

let temperature = {

    "alta": 40,
    "baixa": 18,
    "media": 25,
    "inverno": true,
    "estação": "chuvosa",
    "estacoes": ["inverno", "verão", "outono"]

}

let jsontoStrings = JSON.stringify(temperature)

console.log(jsontoStrings)

let stringtojson = JSON.parse(jsontoStrings)

console.log(stringtojson)
console.log(stringtojson.estacoes[0])