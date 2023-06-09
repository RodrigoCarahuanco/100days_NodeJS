// Ejercicio 5 Crea un objeto "coche" con propiedades como marca, modelo y año.
// Ejercicio 6 Agrega un método al objeto "coche" que calcule cuántos años tiene el coche.

const coche = {
    marca:"Hyundai",
    modelo:"Novea",
    año: 1780,

    calcularTiempoCarro:function(){
        const fechaActual = new Date();
        const anoActual = fechaActual.getFullYear();
        const anosPasados = anoActual - this.año;
        return anosPasados;
    }

}

const resultado = coche.calcularTiempoCarro();

console.log(resultado)