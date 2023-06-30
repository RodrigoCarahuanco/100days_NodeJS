function filtrar(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

// Ejemplo de uso 
function esPar(numero) {
  return numero % 2 === 0;
}

const arrayOriginal= [1,2,3,4,5,6,7,8,9];
const arrayFiltrado = filtrar(arrayOriginal,esPar);
console.log(arrayFiltrado);

