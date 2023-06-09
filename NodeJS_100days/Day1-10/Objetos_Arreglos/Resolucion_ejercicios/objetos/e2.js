// Ejercicio 2 Agrega un método al objeto "persona" que imprima un saludo personalizado.

const persona = {
    nombre: "Rodrigo",
    edad: 22,
    profesion: "Arquitecto",

    saludar:function(){
        console.log(`¡Hola! Mi nombre es ${this.nombre} y soy ${this.profesion}.`)
    }
}

persona.saludar();