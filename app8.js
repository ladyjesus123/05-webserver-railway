const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))//SE USA CARPETA ESTATICA DESPLIEGA UNA PAGINA WEB MIDDLEWARE TRADUCTOR PATH ESTATICO
// ya no se debe poner la raiz porque se llama a public y la manda directo al archivo raiz

//app.get('/', (req, res)=> {
//    res.send('Home Page')
//})


app.get('/hola-mundo',(req, res) =>{
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res)=>{
    res.send('404 | page not found')
})


app.listen(port, () => {
    console.log(`ejemplo de llamando a la app en http://localhost:${port}`);
});

