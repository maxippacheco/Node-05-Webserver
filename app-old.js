
const http = require('http');

//crear http server
//request todas las solicitudes al web server del cliente
//response lo que mi servidor va a responder al cliente
http.createServer((req, res) =>{

    //content-type: text/ plain o application/json
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    /*const persona = {
        id: 1,
        name: 'Fernando'
    }*/

    res.write('Hola mundo');
    res.end();

})
//puerto que queremos que corra la app 
.listen(8080);

console.log('Escuchando el puerto', 8080);