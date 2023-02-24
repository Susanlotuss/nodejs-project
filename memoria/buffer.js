// Busca guardar espacios vacios
//let buffer = Buffer.alloc(4)

// Info guardada en cada espacio
// let buffer = Buffer.from([1, 2, 3])

// Dato guardado en espacio
let buffer = Buffer.from('Hola')

// Devolverá el dato en binario
console.log(buffer)

// Desde buffer lo convertirá a string
console.log(buffer.toString())

// Trabajar con el buffer posición a posición (ejemplo, abecedario)
let abc = Buffer.alloc(26)

// Nos devolverá 26 espacios vacíos
console.log(abc)


// Nos devolverá las letras del abecedario en dichos espacios
for (let index = 0; index < 26; index++) {
    abc[index] = index + 97;
}
console.log(abc.toString())