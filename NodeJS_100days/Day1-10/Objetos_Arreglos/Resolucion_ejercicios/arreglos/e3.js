// Ejercicio 3 Suma todos los elementos de un arreglo.

function sumaTodo(arreglo){

    let total = 0

    for(i=0;i<arreglo.length;i++){
        total+=arreglo[i]
    }

    return total
}

const numeros = [1,2,3,4]
const resultado = sumaTodo(numeros)

console.log(resultado)