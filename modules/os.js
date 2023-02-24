const os = require('os')

// Me permite saber cual es el directorio raíz
console.log(os.homedir())

// Me muestra los directorios temporales, temporales como una imagen que voy a procesar.
console.log(os.tmpdir())

// Me devuelve la arquitecura de mi OS (x64)
console.log(os.arch())

// Me dice en qué plataforma estoy (windows, linux, , mac, etc)
console.log(os.platform())

//  Voy a saber el hostname de la máquina
console.log(os.hostname());

// Podemos acceder a la información de las cpus de mi pc.
console.log(os.cpus())

// Conocer el número de cores y procesos que puede llevar mi cpu
console.log(os.cpus().length)

// Me muestran todos los errores y señales del sistema.
console.log(os.constants)

// Me dice en bytes la memoria libre que tengo.
console.log(os.freemem())

// Acceder al espacio libre de memoria de mi cpu en kb, mb y gb
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// Cuanta memoria en total disponible tienes
console.log(gb(os.totalmem()))

// Puedo acceder a mi interfaz de red activas en mi máquina
console.log(os.networkInterfaces())