const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res)=> {
    res.send('Home Page')
})

app.get('/hola-mundo',(req, res) =>{
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res)=>{
    res.send('404 | page not found')
})

//se usa el listen para escuchar
app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);// se agrega el callback
});

