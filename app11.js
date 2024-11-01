const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public2'))//muestra la pagina principal de la carpeta
//defino el nombre de la ruta /generic y con __dirname es que busque la direccion publi2/generic.html
app.get('/generic',(req, res) => {
    res.sendFile(__dirname +'/public2/generic.html')
})

app.get('/elements',(req, res) =>{
    res.sendFile(__dirname +'/public2/elements.html')
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/public/404.html')
})


app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

