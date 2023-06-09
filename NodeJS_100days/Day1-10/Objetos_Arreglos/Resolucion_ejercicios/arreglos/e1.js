// Ejercicio 1 Encuentra el número más grande en un arreglo.

function numeroGrande(arreglo){
    let maximo = arreglo[0]

    for(i=0;i<arreglo.length;i++){
        if(arreglo[i]>maximo){
            maximo = arreglo[i]
        }
    }

    return maximo;
}

const numeros = [12,34,21]
const resultado = numeroGrande(numeros)

console.log(resultado);

