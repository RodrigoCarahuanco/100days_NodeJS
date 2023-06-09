// Ejercicio 3 Crea un objeto "libro" con propiedades como título, autor y año de publicación.
// Ejercicio 4 Agrega un método al objeto "libro" que calcule cuántos años han pasado desde su publicación.
const libro = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    anoPublicacion: 2000,

    calcularAnosDesdePublicacion: function() {
        const fechaActual = new Date();
        const anoActual = fechaActual.getFullYear();
        const anosPasados = anoActual - this.anoPublicacion;
        return anosPasados;
      }

}

const resultado = libro.calcularAnosDesdePublicacion();

console.log(resultado)