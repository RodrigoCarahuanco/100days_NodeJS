// Ejercicio 7: Escribe una función que tome un número como parámetro y devuelva el cuadrado de ese número.

function calcularPotencia(numero){
    var cuadrado = numero * numero
    return cuadrado;
}


var numero = 5;
var resultado = calcularPotencia(numero);

console.log(resultado);