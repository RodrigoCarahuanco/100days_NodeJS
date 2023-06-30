const fs = require('fs');

/*fs.readFile('main.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }
});*/

/*fs.rename('index.html', 'main.html', (error) => {
    if(error){
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
});*/

/*fs.appendFile('main.html','<p> Hola gentita </p>',(error) =>{
    if(error){
        throw error;
    }
    console.log("Añadido exitosamente");
});*/

fs.writeFile('main.html','Todo cambia', (error) => {
    if(error){
        throw error;
    }
    console.log("Reemplazado exitosamente");
});

fs.unlink('main.html',(error)=>{
    if(error){
        throw error
    }
    console.log("Elimnado exitoso")
});


