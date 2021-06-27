let filme = document.querySelector('#filme');
let buscar = document.querySelector('#buscar');
let exibe = document.querySelector('#box');
let infos = document.querySelector('#infos');

const url = ' http://www.omdbapi.com/';
const apiKey = 'apikey=25894210'
let chamada = new XMLHttpRequest();

buscar.addEventListener('click', function(event){
    event.preventDefault();
    
    EnviaDados();
    limpar();
    
});

function limpar(){
    infos.innerHTML = "";
    document.getElementById('poster').innerHTML = "";
    document.getElementById('filme').value = "";
}

function EnviaDados(filme){
    var filme = document.querySelector('#filme').value.trim();
    chamada.open("POST", url + "?t=" + filme + "&" + apiKey, true);

    chamada.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            
            console.log('teste', filme);
            const array = JSON.parse(this.responseText);
            
            mostraArray(array);
        }
    }

    chamada.send(null);
}


function mostraArray(array){
    let saida = '';
    const {Title, Runtime, Genre, imdbRating, Poster} = array;
    console.log(Title, Runtime, Genre, imdbRating);
    saida += `<p> Filme: ${Title}  </p><p>Duração:  ${Runtime}  </p><p>Gênero:  ${Genre}  </p><p>Avaliação:  ${imdbRating}  </p>`;

    let img = document.createElement('img');
    img.src = Poster;
    document.getElementById('poster').appendChild(img);
    
    infos.innerHTML = saida;
}