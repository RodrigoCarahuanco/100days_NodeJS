var fs = require('fs');

//var files = fs.readdirSync('./');
fs.readdir('./', (error,files)=>{
    if(error){
        throw error;
    }
    console.log(files)

    var archivo = fs.readFileSync('./texto.txt','UTF-8');

    console.log(archivo);
});

