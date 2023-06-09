// Ejericicio 4 Encuentra la media de un arreglo de números.

function mediaNumeros(arreglo){
    let total = 0

    for(i=0;i<arreglo.length;i++){
        total+=arreglo[i]
    }

    return total / arreglo.length
}

const numeros = [1,2,3,4,5,6,7,8]
const resultado = mediaNumeros(numeros)
console.log(resultado)