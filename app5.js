const express = require('express')
const app = express()


//ruta principal
app.get('/', function(req, res){
    res.send('Home Page')
})

//otra ruta llamada hola-mundo
app.get('/hola-mundo', function(req, res){
    res.send('Hola Mundo en su respectiva ruta')
})


app.listen(8080);

