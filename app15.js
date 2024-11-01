//separar donde van las variables del puerto y el entorno 
//credenciales
//variable global credenciales y urls con seguridad
//separar la logica y separar las variables globales o de entorno
//npm install dotenv
//creamos archivo .env con PORT:8080 
//IMPORTANTE npm start
//scripts/"start":"node app15.js"
//crear el archivo .gitignore y colocar node_modules/ y .env

const express = require('express')
const hbs = require('hbs')
require('dotenv').config()// se llama dotenv

const app = express()
const port = process.env.PORT// Se iguala la variable puerto al archivo .env

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public3'))


app.get('/',(req, res) => {
    res.render('home3', {
        nombre: 'lady Castiblanco',
        titulo: 'curso de Node'
    })
})//creamos la ruta de generic.hbs
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'lady Castiblanco',
        titulo: 'curso de Node'
    })
})//creamos la ruta de elements.hbs
app.get('/elements', (req, res) =>{
    res.render('elements', {
    nombre: 'lady Castiblanco',
    titulo: 'curso de Node'
    })
})//rutas invalidas muestra la ruta 404.html
app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})




app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

