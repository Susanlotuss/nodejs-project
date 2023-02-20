console.log("hola mundo")

let i = 0

setInterval(function() {
    console.log(i)
    i++
    // aqui se detendrá LUEGO DE EJECUTARSE porque z no existe.
 /* if (i === 5) {
        var a = 3 + z
    } */
}, 1000)

console.log("Segunda instrucción")