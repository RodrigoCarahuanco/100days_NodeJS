const promesaCumplida = false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida, Yeeeeeeeh');
        } else {
            reject('Promesa rechazada, pipipipi');
        }
    },3000);
});

const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
};

const manejarPromesaRechazada = (error) => {
    console.log(error);
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);