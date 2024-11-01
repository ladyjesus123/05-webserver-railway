const express = require('express')//llamar express ver y validar rutas, ver datos cada aplicacion web se inicia con express su propio servidor 
const app = express()//usar express


//protocolo get peticion trabajar solicitudes de los usuarios  '/' ruta principal
app.get('/', function(req, res){
    res.send('Hola Mundo con ruta principal diagonal ')
})//envio de un mensaje


app.listen(8080);

