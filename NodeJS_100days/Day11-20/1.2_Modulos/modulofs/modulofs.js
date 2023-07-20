const fs = require('fs');

fs.readFile('main.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }
}); // Sirve para leer archivos

fs.rename('main.html', 'nuevo.html', (error) => {
    if(error){
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
}); // Sirve para cambiar el nombre del archivo

fs.appendFile('main.html','<p> Hola gentita </p>',(error) =>{
    if(error){
        throw error;
    }
    console.log("Añadido exitosamente");
});// Sirve para añadir codigo en la ultima parte del archivo

fs.writeFile('main.html','Todo cambia', (error) => {
    if(error){
        throw error;
    }
    console.log("Reemplazado exitosamente");
}); // Sirve para sobreescribir el archivo

fs.unlink('main.html',(error)=>{
    if(error){
        throw error
    }
    console.log("Elimnado exitoso")
});// Sirve para eliminar el archivo
