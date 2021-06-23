var mostraDados = document.querySelector("#lista");
var botaoEnviarDados = document.querySelector("#tarefa");
var salvar = document.querySelector("#salva-dados");


const url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks';
var chamada = new XMLHttpRequest();

mostraDados.addEventListener('click', function(event){
    event.preventDefault();
    getValue();
    
});

salvar.addEventListener('click', function(event){
    
    event.preventDefault();
    console.log('passou');
    EnviarDados();
    
});

getValue();


function EnviarDados(tarefa){
    chamada.open("POST", url, true);
    chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    var tarefa = document.querySelector('#tarefa').value;
    console.log('teste', tarefa);

    chamada.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            getValue();
        }
    }

    chamada.send(
        JSON.stringify({
            title_task: tarefa,
            
        })
    );
}

function getValue(){
    
    chamada.open('GET', url, true);
    chamada.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var arrayDeTarefas = JSON.parse(this.responseText);
            console.log('passou?', arrayDeTarefas);
            window.localStorage.setItem("title_task", JSON.stringify(arrayDeTarefas));
            mostraArray(arrayDeTarefas);
        }
    }

    
    // var valorLocalStorage = window.localStorage.getItem("title_task");
    // mostraArray(JSON.parse(valorLocalStorage));

    chamada.send(null);
} 

function mostraArray(array){
    var saida = '';

    var i;
console.log('passou aqui', array);
    for(i =0; i< array.length; i++){
        saida += '<a>' + array[i].title_task + '</a></br>';
        // saida += 
        // array[i].tarefa
    }

    document.getElementById('lista').innerHTML = saida;
}