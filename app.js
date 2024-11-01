const http = require('http');// se usa paquete http interno de node
//request requerimientos que el usuario solicita result todo lo que le enviamos al usuario
//createServer para crear el servidor
http.createServer((req, res) => {
    
    res.write('hola mundo de Lady Castiblanco');//escribir hola mundo
    res.end();//se termina el proceso
})

.listen(8080)// que se escuche en el servidor

console.log(`escuhchando el puerto`, 8080);// muestra en consola

//para dejar de escuchar el puerto solo se da control+c