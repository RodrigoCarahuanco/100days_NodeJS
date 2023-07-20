const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log("Este es el cuerpo de req");
    console.log(req.url);
    console.log(req.method);
    res.end('Esto es un mensaje de response');
})

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log(`Escuchando en el puerto ${puerto}`);
})