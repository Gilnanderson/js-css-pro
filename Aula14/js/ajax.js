var xmlhttp = new XMLHttpRequest();
var url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos';
xmlhttp.open("GET", url, true);
xmlhttp.send(null);
xmlhttp.onreadystatechange = function() {
    var resposta = JSON.parse(this.responseText);
    var conteudo = document.getElementById("conteudo");
    for(var i = 0; i< resposta.length; i++){
        
                
        conteudo.innerHTML += `
            <h3>Produtos</h3>
            <br/>    
            <hr/>   
        ` + '<p>' + resposta[i].nome + ' ' + resposta[i].preco + '</p>' 
        ;
            
        
    }
};


// function carregaDados(arquivo){
//     var httpRequest = new XMLHttpRequest();

//     httpRequest.onload = mostraDados;

//     httpRequest.open('GET', 'https://60b81fdeb54b0a0017c031db.mockapi.io/api/v1/produtos', true);
//     httpRequest.send();

//     httpRequest.onreadystatechange = function() {
//         var resposta = JSON.parse(this.responseText);
//         var conteudo = document.getElementById("conteudo");
//         for(var i = 0; i< resposta.length; i++){         
//             conteudo.innerHTML = `
//                 <h3>Produtos</h3>
//                 <br/>    
//                 <hr/>   
//             ` + '<p>' + resposta[i].nome + '</p>',
//             '<p>' + resposta[i].preco + '</p>' 
//         }
//     }
//     // httpRequest.onprogress = mostraLoader;

    

//     httpRequest.send(null);
// }

// function mostraDados(){
    
//     var lista = document.getElementById('conteudo');
//     lista.innerHTML = this.responseText;
// }

// var btnProdutos = document.getElementById('btn-produtos')
// btnProdutos.addEventListener('click', function(){
//     carregaDados(this.responseText);
// });





