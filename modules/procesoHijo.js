const { exec, spawn } = require('child_process');

// same as:
//const exec = require('child_process').exec;

// en windows se utiliza 'dir', en caso de utilizar linux o algún otro será 'ls -la'
exec('dir', (err, stdout, sterr) => {
    if (err) {
        console.error(err.message)
        return false;
    }

    console.log('yay', stdout)
})

// Aquí podemos ver como se ejecuta nuestro proceso y a la vez ejecuta otro proceso de node por debajo -
// en este caso ejecutando el proceso dentro de consola.js - Así también puedo traer código y trabajarlo facilmente.
exec('node modules/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err.message)
        return false;
    }

    console.log(stdout)
})

//Aquí podemos ver la funcionalidad de spawn - en caso de utilizar linux o cualquier otro sistema distinto a windows,
// reemplazar por ('ls', ['-la]).
let proceso = spawn('cmd.exe', ['/c','dir']);

    // Para ver el resultado de la variable proceso.
    console.log(proceso)

    // Para ver el código del proceso
    console.log(proceso.pid)

    // Para ver si está conectado
    console.log(process.connected)

    // Para escuchar lo que sucede en este evento
    proceso.stdout.on('data', function(dato) {
        console.log('process killed?', process.killed)
        console.log('here', dato.toString())
    })

    // Para detectar cuando finalice este proceso
    proceso.on('exit', function() {
        console.log('El proceso finalizó')

    // y/o si el proceso murió
        console.log(proceso.killed)
    })