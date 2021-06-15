var produtos = [
    {
       "id":1,
       "name":"Jaleco",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":2,
       "name":"Avental",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":3,
       "name":"Touca",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":4,
       "name":"Fronha",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":5,
       "name":"Embalagem",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":6,
       "name":"Porta talher",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":7,
       "name":"Porta absorvente",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "available":true
    }
];

// Capturar o elemento que vai receber os produtps
var root = document.getElementById('root');

// Percorrer o JSON de produtos (array)
// 1º) Alternativa
// for (var i=0; i < produtos.length; i++){
//     root.innerHTML += produtos[i].name + ' ' + produtos[i].description + ' ' + produtos[i].price + '<br>';
// }

// 2º) Variação
// var resultado = '';
// for (var i=0; i < produtos.length; i++){
//     resultado += '<div>' + produtos[i].name + ' ' + produtos[i].description + ' ' + produtos[i].price + '</div>';
// }

// root.innerHTML = resultado;

// 3º) Variação
// for (var i=0; i < produtos.length; i++){
//     var div = document.createElement('div');
//     div.innerHTML = produtos[i].name + ' ' + produtos[i].description;

//     root.appendChild(div);
// }


for (var i=0; i < produtos.length; i++){
    var tr = document.createElement('tr');
   

    var tdNome = document.createElement('td');
    tdNome.innerHTML = produtos[i].name;

    var tdDesc = document.createElement('td');
    tdDesc.innerHTML = produtos[i].description;

    var tdPreco = document.createElement('td');
    tdPreco.innerHTML = produtos[i].price;

    // Atribuição da hierarquia dos nodos
    tr.appendChild(tdNome);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPreco);

    // Atribui o elemento TR ao PAI root
    root.appendChild(tr);
}