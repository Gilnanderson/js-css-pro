function carregaDados(arquivo){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onload = mostraDados;

    httpRequest.onloadstart = mostraLoader;

    // httpRequest.onprogress = mostraLoader;

    httpRequest.open('GET', arquivo, true);

    httpRequest.send(null);
}


function mostraLoader(){
    var lista = document.getElementById('lista');
    lista.innerHTML = 'Carregando...';
}

function mostraDados(){
    var lista = document.getElementById('lista');
    lista.innerHTML = this.responseText;
}

var btnProdutos = document.getElementById('btn-produtos')
btnProdutos.addEventListener('click', function(){
    var exibe = carregaDados('produtos.json');
    for(var i = 0; i < exibe.length; i++){
        carregaDados(exibe[i].nome);
    }
    
});

var btnCarros = document.getElementById('btn-carros')
btnCarros.addEventListener('click', function(){
    carregaDados('carros.html');
});

var btnFrutas = document.getElementById('btn-frutas')
btnFrutas.addEventListener('click', function(){
    carregaDados('frutas.html');
});

