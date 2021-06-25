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

// NOTIFICACAO //

salvar.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Funcionou');
    chamaNotification();
});

function chamaNotification(){
    console.log('Funcionou2');
    if(!Notification){
        alert("Verificar Notification");
        return;
    }
    

    if(Notification.permission !== 'granted'){
        Notification.requestPermission();
    }
    abreNotification();
};

function abreNotification(){
    console.log('Funcionou3');
    if(Notification.permission !== 'granted'){
        Notification.requestPermission();
    }else{
        var notificationValue = new Notification("Tarefa registrada com Sucesso!", {
            icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
            body: "Registrada por Gilnanderson Barrozo",
            image: "https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg"
        });
        notificationValue.onclick = function(){
            console.log('teste');
        }
    }
}