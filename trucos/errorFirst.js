function async(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    }, 1000)
}

// Recojo el error con el error first dentro de la función y comprobarlo
async(function (error, dato) {
    if (error) {
        console.error('Error encontrado')
        console.error(error)
        //throw error -- No funcionará en funciones asincronas
        return false
    }
    console.log('Todo funcionando', dato)
})