// De esta forma podemos medir el tiempo que tarda cada bucle/función sincrono y async en finalizar,
// al igual que calcular cuanto tarda todo nuestro programa completo en ejecutarse y finalizar.

console.time('todo')

let suma = 0;

console.time('bucle1')

for (let index = 0; index < 100000000; index++) {
    suma += 1;
}

console.timeEnd('bucle1')

let suma2 = 0;

console.time('bucle2')

for (let j = 0; j < 100000000; j++) {
    suma2 += 1;
}

console.timeEnd('bucle2')

console.time('async')

console.log('empieza async')
asyncr()
.then(() => {
    console.timeEnd('async')
})

console.timeEnd('todo')

function asyncr() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Termina async')
            resolve()
        })
    })
}