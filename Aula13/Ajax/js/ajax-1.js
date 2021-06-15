function carregaDados(arquivo){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = mostraDados;

    httpRequest.open('GET', arquivo, true);

    httpRequest.send(null);
}


function mostraDados(){
    var lista = document.getElementById('lista');
    lista.innerHTML = this.responseText;
}

var btnProdutos = document.getElementById('btn-produtos')
btnProdutos.addEventListener('click', function(){
    carregaDados('produtos.html');
});

var btnCarros = document.getElementById('btn-carros')
btnCarros.addEventListener('click', function(){
    carregaDados('carros.html');
});

