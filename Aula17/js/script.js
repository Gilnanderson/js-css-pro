console.log("Gilnanderson");

var semJquery = document.getElementById('teste');

console.log(semJquery);

var comJquery = $("#teste");
console.log(comJquery);

$("#teste").on("click", function(){
    console.log("Enviado");
})

$("#teste").hide();


$.getJSON(
    "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    function(data){
        console.log(data);
    }
);

$.ajax({
    type: "POST",
    url: "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    data: {
        title_task: "Adicionando com POST JQuery",
        level: "30"
    }
});