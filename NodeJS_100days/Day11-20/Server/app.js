const http = require('http');
const servidor = http.createServer((request,response)=>{
    // Proceso
    response.end('Hola mundo')
});

servidor.listen(3000,()=>{
    console.log("El servidor esta escuchando...")
});
