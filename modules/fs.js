const fs = require('fs')

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString())
    })
}

leer(__dirname + "/file.txt")

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if(err) {
            console.error("No se ha podido")
        } else {
            console.log("Se ha logrado")
        }
    })
}
//utilizo una ruta nueva agregando el 1 para que cree uno nuevo y poderlo ver, sin embargo puede usarse el mismo y modificará el original.
escribir(__dirname + "/file1.txt", "Soy un archivo nuevo")

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}
//creo un nuevo archivo para borrarlo y evidenciar el flujo
escribir(__dirname + "/file3.txt", "Soy un archivo para eliminar")
borrar(__dirname + "/file3.txt", console.log)