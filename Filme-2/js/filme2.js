let filme = document.querySelector('#filme');
let buscar = document.querySelector('#buscar');
// let exibe = document.querySelector('.box');
let infos = document.querySelector('.infos');
let container = document.querySelector('.container');

const url = 'https://www.omdbapi.com/?';
const apiKey = 'apikey=25894210'
// let chamada = new XMLHttpRequest();

buscar.addEventListener('click', function(event){
    event.preventDefault();
    
    EnviaDados();
    limpar();
    
});

function limpar(){
    container.innerHTML = "";
    // document.querySelector('.poster').innerHTML = "";
    document.getElementById('filme').value = "";
}

function EnviaDados(filme){
    let nomeFilme = document.querySelector('#filme').value.trim();
    console.log(nomeFilme);
    console.log(`${url}s=${nomeFilme}&${apiKey}`);
    fetch(`${url}s=${nomeFilme}&${apiKey}`, {
        method: "GET"
    }).then(response => response.json())
    .then(response => {
        console.log(response.Search);
        mostraFilme(response.Search)
    }).catch(e =>  {
        console.log(e.Erro);
    });
    
}


function mostraFilme(response){
    let saida = '';
    try {
        
        
        for(let i = 0; i<response.length; i++){
            const {Title, Year, Type, Poster} = response[i];
            saida += `<div class="box"><div class="poster"><img src="${Poster}" alt=""></div><div class="infos"><p> Filme: ${Title}  </p><p>Ano:  ${Year}  </p><p>Tipo:  ${Type}  </p></div></div>`;
            container.innerHTML = saida;
        }
    
    } catch (error) {
        saida += `<div class="box"><div class="poster"><img src="img/not_found.png" alt="não encontrado"></div><div class="infos"><p> Filme não encontrado!  </p></div></div>`;
        container.innerHTML = saida;
    }
    // console.log(response.Response);
    
    
    // console.log(saida);
    

    
    
    
}