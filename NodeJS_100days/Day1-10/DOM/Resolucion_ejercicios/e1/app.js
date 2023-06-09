// Ejercicio 1 Cambiar el contenido de un elemento

const titulo1 = document.getElementById('1')

titulo1.textContent = "Rodrigo Carahuanco"

// Ejercicio 2 Añadir y eliminar clases

const div = document.getElementById('2')
div.classList.add("myClass");

setTimeout(function() {
    div.classList.remove("myClass");
  }, 5000);

 // Ejercicio 3 Crear elementos dinámicamente
 const boton = document.getElementById('boton');

 boton.addEventListener("click",function(){
    let parrafo = document.createElement("p");

    let parrafoText = document.createTextNode("Este es un parrafo nuevo");
    parrafo.appendChild(parrafoText);

    let parentElement = document.getElementById('idBoton');

    parentElement.appendChild(parrafo);
 });
 