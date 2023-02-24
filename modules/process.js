// No se requiere importar process, ya que es una clase global.
// const process = require('process')

// Se ejecutará antes de que el proceso termine y se desconecte
process.on('beforeExit', () => {
    console.log('Proceso acabará')
})

// Exit, Se ejecuta cuando node detiene el o se desconecta totalmente del eventloop y cierra su proceso principal,
// cualquier cosa dentro, ya no ejecutará.
process.on('exit', () => {
    console.log('Proceso ha acabado')
})

// Cuando algo se rompe y necesito escucharlo
process.on('uncaughtException', (err, origen) => {
    console.error('Error no capturado')
    console.error(err)
})

// Forzando error
// functionN()