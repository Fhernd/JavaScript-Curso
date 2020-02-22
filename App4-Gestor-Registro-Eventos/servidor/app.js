const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

let app = express();
app.set('port', 3900);

let servidor = http.Server(app);
servidor.listen(app.get('port'), function() {
    console.log(`El servidor Express se está ejecutando en el puerto ${app.get('port')}.`);
});
