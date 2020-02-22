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

let servidor = http.Server(app);
servidor.listen(app.get('port'), function() {
    console.log(`El servidor Express se está ejecutando en el puerto ${app.get('port')}.`);
});
