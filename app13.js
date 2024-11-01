const express = require('express')//llamamos express
const app = express()//usamos express
const port = 8080//crear constante del puerto

app.set('view engine', 'hbs')//se utiliza para el renderizado de la pagina web
app.use(express.static('public3'))//aqui van todos los archivos estaticos, imagenes paginas elementos
//se envia home2 y los valores que se van a cambiar en home2 
app.get('/', (req, res) => {
    res.render('home2',{
        nombre: 'lady Castiblanco',
        titulo: 'curso de Node'
    })
})
app.get('/generic',(req, res) => {
    res.sendFile(__dirname +'/public3/generic.html')
})
app.get('/elements',(req, res) =>{
    res.sendFile(__dirname +'/public3/elements.html')
})
app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/public/404.html')
})
app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

