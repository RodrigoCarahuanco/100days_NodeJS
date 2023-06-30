const EvenEmitter = require('events');

const emisorProductos = new EvenEmitter();

emisorProductos.on('compra',(total,numProductos) => {
    console.log(`Se realizo una compra $${total}`);
    console.log(`Total de productos: ${numProductos}`);
});


emisorProductos.emit('compra',1000,12);

