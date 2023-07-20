# Modulos en Node

## ¿Que es? 

- Funcionalidad organizada en uno o varios archivos JS que puede ser reutilizada en una app 

## Ventajas

- Evitar repeticion de codigo
- Reutilizar codigo
- Es mas facil encontrar y corregir "bugs"
- Es mas facil modificar codigo
- Es mas facil agregar nueva funcionalidad

## Modulos built-in o principales

- Son aquellos que puedes usar sin instalar en tu app

Contiene:
- http
- https
- fs (file system)
- os (operating system)
- path
- console

## Console

- Modulo built-in que implementa funcionalidad similar a la consola de un navegador web.

## Proccess

- Provee informacion sobre el proceso de node que se esta ejecutando

## OS 

- Contiene funcionalidad para obtener informacion sobre el sistema operativo en el cual se ejecuta la aplicacion. 

## Timers

- Contiene funciones que ejecutan codigo luego de un cierto periodo de tiempo

### setTimeout()

- Para ejecutar codigo luego de un numero especifico de milisegundos

### setImmediate()

- Para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos

### setInterval()

- Se usa para ejecutar codigo un numero infinito de veces con un retraso de milisegundos

## fs

- Contiene funcionalidad para trabajar con el sistema de archivos

- Todos los metodos de este modulo son asincronos por defecto

### Operaciones fs

- Leer
- Modificar
- Copiar
- Eliminar
- Cambiar nombre



## Notas 

- Que es higher-order Programming