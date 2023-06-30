# Proyecto de web service

## Procedimiento (Dependencias y estructura MVC)
1. npm init --yes (Sirve para crear un package.json) 
2. npm i express (Instalar express en el proyecto a traves de npm)
3. Creamos estructura MVC (Osea dividimos la logica de nuestra aplicacion en multiples carpetas)
    - routes: Lleva todas las URL del servidor
    - views: Todas las vistas o todas las carpetas HTML
    - public: Contener todo el codigo de front end
    - controllers: Manejar las peticiones a traves de funciones
    - app.js: Codigo inicial
4. npm i ejs body-parser (Ejs: para plantillas, Body-parser: El servidor ahora entiende las peticiones post)
5. npm i nodemon -D (Facilita para escribir el codigo)

## Procedimiento (Codigo inicial)
1. Ruteamos express en nuestra app 
2. Ejecutamos express con la variable app
3. Inicializamos app con listen (".listen(puerto,function)")
4. En la terminal correms el servidor con `npm run dev`
5. Seccionamos app.js 
    - settings
    - middlewares
    - routes
    - static files
6. Configuramos y hacemos que se oiga en el puerto 3000 
7. Creamos una variable con el puerto que creamos e iniciamos el server con un mensaje que  diga "Estamos en el puerto ${puerto}"
8. Configuramos las vistas de la app con "Set" y referenciamos la direccion de las vistas con path.join(__dirname,'views')
9. Referenciamos el motor de plantilla con set y con 'view engine'
10. Usamos un middleware con .use con una request, response y la funcion next. Imprimos un menosaje que devuelva la url y el metodo de la request
11. 