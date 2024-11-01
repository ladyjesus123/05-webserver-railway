const http = require('http')

http.createServer((req, res) => {
    console.log(req);// imprimir lo que tiene el request del usuario
    
    res.writeHead(200,{'Content-Type': 'application/json'})// status 200 donde todo esta bien y json 
    const persona = {
        id: 1,
        nombre: 'Lady Castiblanco'
    }
    
    res.write(JSON.stringify(persona));// escriba el objeto persona
    res.end();
})

.listen(8080)
    console.log('Escuchando el puerto ', 8080);
