const http = require('http')

http.createServer((requ,res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-type': 'application/csv'})//csv archivos planos para cargar datos de excell separado por comas 
    res.write('id, nombre\n')
    res.write('id, Lady\n')
    res.write('id, Danilo\n')
    res.write('id, Elyam\n')
    res.write('id, sergie\n')
    res.write('id, Daniela\n')
    res.end();

})
.listen(8080)

console.log('',8080);

