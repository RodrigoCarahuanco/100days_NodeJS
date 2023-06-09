// Ejercicio 5: Escribe una función que tome una matriz de números como parámetro y devuelva la suma de todos los números

function sumaMatriz (matriz){
    var suma = 0;

    for (var i = 0; i < matriz.length; i++){
        suma += matriz[i]
    }
    return suma;
}

var numeros = [1,2,3,4,5]
var funcion = sumaMatriz(numeros)

console.log(funcion)

