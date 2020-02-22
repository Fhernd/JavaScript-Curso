const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

let app = express();
app.set('port', 3900);
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function(req, res) {
    res.send('Bienvenido a la API de Registro de Eventos.');
});

app.post('/registro', (req, res, next) => {
    let campo;
    for(campo in req.body){
        if(!req.body[campo] && campo !== 'expectativas'){
            res.status(400).json({});
            return next();
        }
    }

    setTimeout(() => {
        res.status(200).json({'mensaje': `El usuario ${req.body.nombre} se ha registrado de forma satisfactoria.`});
    }, 5000);
});

app.get('/estadisticas', (req, res, next) => {
    setTimeout(() => {
        res.status(200).json({
            profesion: [40, 35, 25, 30],
            experiencia: [10, 30, 20],
            edad: [40, 30, 20]
        });
    }, 5000);
});

let servidor = http.Server(app);
servidor.listen(app.get('port'), function() {
    console.log(`El servidor Express se está ejecutando en el puerto ${app.get('port')}.`);
});
