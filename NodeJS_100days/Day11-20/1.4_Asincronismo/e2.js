// Promesa con pizza y probabilidad

const probabilidad = () => {
    return Math.random() < 0.8;
}

const pizzaPedido = new Promise((resolve,reject)=>{
    console.log("Procesando su pedido");
    setTimeout(()=>{
        if(probabilidad()){
            resolve("Su pedido esta disponible...")
        }else{
            reject("Su pedido no se pudo procesar...")
        }
    },3000)
});

function darRespuesta(respuesta) {
    return new Promise ((resolve) => {
        console.log(`Su respuesta fue ${respuesta}`)
        setTimeout(()=>{
            resolve("Gracias por su compra vuelva pronto")
        },6000)
    });
}


pizzaPedido
    .then(exito => {
        console.log(exito)
        darRespuesta(exito)
    })
    .then(resultado => {
        console.log(resultado)
    })
    .catch(fracaso => {
        console.log(fracaso)
    })