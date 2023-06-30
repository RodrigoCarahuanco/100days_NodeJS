// Creamos una promesa simple 

const statusPromesa = true;

const manejarPromesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(statusPromesa){
            resolve("Promesa aprobada");
        }else{
            reject("Promesa denegada");
        }
    },3000)
});

manejarPromesa
    .then(exito => {
        console.log(exito);
    })
    .catch(fracaso => {
        console.log(fracaso);
    })
