
var mostraDados = document.querySelector("#lista-dados");
var botaoEnviarDados = document.querySelector("#enviar");
var validaStatus = document.querySelector("#status");

const url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos';
var chamada = new XMLHttpRequest();


mostraDados.addEventListener('click', function(event){
    event.preventDefault();
    getValue();
    
});

botaoEnviarDados.addEventListener('click', function(event){
    event.preventDefault();
    EnviarDados();
});

getValue();

function EnviarDados(){
    chamada.open("POST", url, true);
    chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    var nome = document.querySelector('#nome').value;
    var preco = document.querySelector('#preco').value;

    chamada.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            getValue();
        }
    }

    chamada.send(
        JSON.stringify({
            nome: nome,
            preco: preco,
        })
    );
}

function getValue(){
    if (navigator.onLine){
        validaStatus.innerHTML = '<p style="color:green">Online</p>'

        chamada.open('GET', url, true);
        chamada.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var arrayDeProdutos = JSON.parse(this.responseText);
                window.localStorage.setItem("produtos", JSON.stringify(arrayDeProdutos));

                mostraArray(arrayDeProdutos);
            }
        }
    }else{
        validaStatus.innerHTML = '<p style="color:red">Offline</p>';

        var valorLocalStorage = window.localStorage.getItem("produtos");
        mostraArray(JSON.parse(valorLocalStorage));
    };

    

    chamada.send(null);
};

function Delete(id){
    chamada.open("DELETE", url+"/"+id, true );
    chamada.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            getValue();
        }
    }
    chamada.send(null);
}

function mostraArray(array){
    var saida = '';

    var i;

    for(i =0; i< array.length; i++){
        // saida += '<a>' + array[i].nome + '</a></br>';
        saida += 
        '<div class="container-card"><h1 class="titulo-card">'+ 
        array[i].nome + 
        '</h1><div class="image"><img src="'+
        array[i].imagem +
        '" alt="'+
        array[i].nome +
        '"/></div><p class="preco">' +
        array[i].preco +
        '</p><p class="descricao">' +
        array[i].descricao +
        '</p><p class="loja">' +
        array[i].loja +
        '</p><button id="'+array[i].id+'" onClick=Delete(this.id)>Remover Item</button></div>';
    }

    document.getElementById('lista-de-produtos').innerHTML = saida;
}