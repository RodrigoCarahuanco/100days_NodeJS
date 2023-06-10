// Aqui empieza el documento JavaScript
var fs = require("fs");

fs.readdir('./',(error,files)=>{
    if(error){
        throw error;
    }
    console.log(files);

    fs.readFile('./app.js','UTF-8',(error,archivo1)=>{
        if(error){
            throw error;
        }
        console.log(archivo1);
    });
    fs.readFile('./text.txt','UTF-8',(error,archivo2)=>{
        if(error){
            throw error;
        }
        console.log(archivo2);
    });
    console.log('Contenido del archivo...app.js');
    console.log('Contenido del archivo...text.txt');
    
});