const http = require('http');

const servidor = http.createServer((req,res) => {
    res.end("Hola desde el otro lado");
});

const servidorWeb = 5000

servidor.listen(servidorWeb,()=>{
    console.log(`Escuchando de el servidor ${servidorWeb}`);
});

