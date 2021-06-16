var texto = '[{"nome" : "TV"}]';

console.log(texto);

//JSON Parse: converte um texto em JSON (desde que o texto seja compátivel)
var objeto = JSON.parse(texto);

console.log(objeto);
console.log(objeto[0].nome);

var carros = [
    {
        "nome": "Fusca",
        "ano": 1984
    },
    {
        "nome": "Belina",
        "ano": 1986
    }
];

console.log(carros);

// JSON Stringfy converte um objeto JSON válido em String
var carrosString = JSON.stringify(carros);
console.log(carrosString);