const express = require('express')//llamamos express
const app = express()//se usa express
const port = 8080//creamos el puerto

//npm install hbs
//se usa hbs con app.set
//las paginas con hbs deben ir con el sufijo .hbs

//hace sito web semiestatico
app.set('view engine', 'hbs')//agregar modalidad de renderazido (absorbe todo el codigo y lo muestra lo mas rapido posible)
app.use(express.static('public3'))

//renderiza a home

app.get('/',(req, res) => {
    res.render('home')
})

app.get('/generic',(req, res) => {
    res.sendFile(__dirname +'/public3/generic.html')
})

app.get('/elements',(req, res) =>{
    res.sendFile(__dirname +'/public3/elements.html')
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/public3/404.html')
})


app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

