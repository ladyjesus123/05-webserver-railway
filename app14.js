const express = require('express')//llamamos express
const hbs = require('hbs')//llamamos hbs
const app = express()//usamos express
const port = 8080//creamos puerto

app.set('view engine', 'hbs')//llamamos hbs
//patrial para codigo que se repite en mas de una pagina web o lugar / __dirname+(directorio) {{> este mayor que es para usar patrials}}
hbs.registerPartials(__dirname + '/views/partials')//para decir al renderizado que se va a reutilizar codigo colocamos la ruta que tenemos las vistas/patrials

app.use(express.static('public3'))// archivos estaticos

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
