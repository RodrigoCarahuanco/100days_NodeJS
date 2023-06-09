// Ejercicio 5 Encuentra todos los elementos duplicados en un arreglo.

function encontrarElementosDuplicados(arreglo) {
    let elementosDuplicados = [];
    let contador = {};
  
    for (let i = 0; i < arreglo.length; i++) {
      if (contador[arreglo[i]] === undefined) {
        contador[arreglo[i]] = 1;
      } else {
        if (contador[arreglo[i]] === 1) {
          elementosDuplicados.push(arreglo[i]);
        }
        contador[arreglo[i]]++;
      }
    }
  
    return elementosDuplicados;
}

const numeros = [1,2,2,3,3,5,6]
const resultado = encontrarElementosDuplicados(numeros)
console.log(resultado);