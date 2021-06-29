function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAqui(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Bad value: Not an string!');

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
};


// esperaAqui("Conexão com o BD", rand(1, 5))
// .then((resposta) =>{
//     console.log(resposta);
//     return esperaAqui("Buscar dados no banco", rand(1, 5));
// })
// .then((resposta) =>{
//     console.log(resposta);
//     return esperaAqui("Tratar Dados", rand(1, 5));
// })
// .then((resposta) => {
//     console.log(resposta);
// })
// .catch((erro) =>{
//     console.log(`ERRO ${erro}`);
// });



// ASYNC

// async function executar(){
//     const fase1 = await esperaAqui("Fase1", rand(1, 5));
//     console.log(fase1);
//     const fase2 = await esperaAqui("Fase2", rand(1, 5));
//     console.log(fase2);
//     const fase3 = await esperaAqui("Fase3", rand(1, 5));
//     console.log(fase3);

//     console.log(`Terminamos a fase: ${fase3}`);
// }

const executar = async () =>{
    const fase1 = await esperaAqui("Fase1", rand(1, 5));
    console.log(fase1);
    const fase2 = await esperaAqui("Fase2", rand(1, 5));
    console.log(fase2);
    const fase3 = await esperaAqui("Fase3", rand(1, 5));
    console.log(fase3);

    console.log(`Terminamos a fase: ${fase3}`);
}

executar();

const url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks";

//GET por meio do FETCH
fetch(url, {
    method: "GET"
}).then(response => response.json())
.then(response => console.log(response));

//POST
fetch(url, {
    method: "POST"
})