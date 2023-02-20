//clg usado para ver los modulos globales que trae node js por defecto
//console.log(global)

//global module setInterval and clearInterval
let i = 0

let interval = setInterval(function() {
    if (i === 3) {
        clearInterval(interval)
    } 
    i++
    console.log("Hola")
}, 1000)


//global module setImmediate
setImmediate(function() {
    console.log("set immediate")
})


//para requerir modulos:
//require(), import.

//para conocer el archivo o nombre de directorio especifico:
//clg(__filename), clg(__dirname)

//se pueden crear variables globales pero en lo posible evitarlo:
//global.miVariable = "miValor" clg(miVariable) // miValor

