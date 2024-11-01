const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))// habilita la ruta principal

app.get('/hola-mundo',(req, res) =>{
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/public/404.html')//callback ruta invalida manda el archivo __dirname direccion del archivo
})


app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

