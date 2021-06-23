var mostraNotification = document.querySelector("#mostra-notification");


mostraNotification.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Funcionou');
    chamaNotification();
});

function chamaNotification(){
    console.log('Funcionou2');
    if(!Notification){
        alert("Verifica Notification");
        return;
    }
    

    if(Notification.permission !== 'granted'){
        Notification.requestPermission();
    }
    abreNotification();
}

function abreNotification(){
    console.log('Funcionou3');
    if(Notification.permission !== 'granted'){
        Notification.requestPermission();
    }else{
        var notificationValue = new Notification("Funcionou!", {
            icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
            body: "Gilnanderson Barrozo",
            image: "https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg"
        });
        notificationValue.onclick = function(){
            console.log('teste');
        }
    }
}