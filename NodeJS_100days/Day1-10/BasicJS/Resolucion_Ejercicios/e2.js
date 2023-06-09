// Ejercicio 2: Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena invertida.

function invertir (palabra){
    return palabra.split('').reverse().join('');
}

let text = "Juego"
let textInvertido = invertir(text)

console.log(textInvertido)