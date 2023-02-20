function soyAsync(nombre, miCallback) {
    setTimeout(function() {
        console.log("Hola " + nombre, "si soy async " )
        miCallback()
    }, 1000)
}

function Bye(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios "+ nombre)
        otroCallback()
    }, 1000)
}

//Al poner la función bye dentro de soyAsync, le estoy indicando que independientemente del proceso asíncrono,
//quiero ver soyAsync primero que Bye.
soyAsync("Susana", function() {
    Bye("Susana", function() {
        console.log("Fin del proceso async")
    })
})

console.log("Probando async")