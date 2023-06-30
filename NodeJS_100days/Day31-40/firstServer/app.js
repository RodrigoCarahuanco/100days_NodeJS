const { log } = require('console');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

const routes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
const puerto = app.get('port');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares
app.use((req,res,next)=> {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// routes
app.use(routes);

// static files
app.use(express.static(path.join(__dirname,'public')));




// start server
app.listen(puerto,()=>{
    console.log(`Estamos en el puerto ${puerto}`);
});