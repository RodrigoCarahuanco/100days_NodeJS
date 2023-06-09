// Ejercicio 2 Encuentra el número más pequeño en un arreglo.

function numeroPequeño(arreglo){
    let minimo = arreglo[0]

    for(i=0;i<arreglo.length;i++){
        if(minimo>arreglo[i]){
            minimo = arreglo[i]
        }
    }

    return minimo;
}

const numeros = [24,35,11];
const resultado = numeroPequeño(numeros);
console.log(resultado);