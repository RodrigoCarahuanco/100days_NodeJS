function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

// Sirve para ejecutar una accion en un tiempo determinado
setTimeout(mostrarTema,2000,"Calculo diferencial avanzado")

// Sirve para ejecutar una accion de inmediato
setImmediate(mostrarTema,"Ingles")

// Sirve para repetir un evento cada determinado tiempo
setInterval(mostrarTema,2000,"Calculo diferencial avanzado")

/*


*/