window.localStorage.setItem("nome", "Gilnanderson Barrozo");

const data ={
    nome: 'Gilnanderson Barrozo',
    idade: 36,
    rua: 'Rua Capitu',
};

const valorData = JSON.stringify(data);

window.localStorage.setItem("usuario", valorData);

const retornaObjetoStorage = window.localStorage.getItem('usuario');

console.log('mostra valor retornado (JSON)', JSON.parse(retornaObjetoStorage));

// window.localStorage.removeItem("nome");

window.localStorage.clear();