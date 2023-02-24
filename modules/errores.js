// Manejo de errores en funciones sincronas y asincronas
function errors() {
    return 3 + z
}

function asyncError(cb) {
    setTimeout(function() {
        try {
            return 3 + z
        } catch (err) {
            console.error('error en función asíncrona')
            cb(err)
        }
    })
}

try {
    asyncError(function(err) {
        console.log(err.message)
    })
    errors()
} catch(err) {
    console.error('Hubo un error!')
    console.error(err.message)
}