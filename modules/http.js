import http from 'http'

http.createServer(router).listen(3000)

function router (req, res) {
    console.log('Nueva petición')
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.write('Hola, como estas');
            res.end();
            break;

            default:
                res.write('Error 404: No se lo que quieres')
                res.end()
    }

    //Buena práctica el añadir el clg de listen
    console.log("listen http 3000 port")
}

/* //Para escribir la cabecera
res.writeHead(201, { 'Content-type': 'text/plain' })

//Para leer la petición
res.write('Hola http funcionando, respuesta a usuario.')

res.end(); */