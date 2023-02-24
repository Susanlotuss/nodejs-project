// tipos de console generales
console.log('anything')
console.info('info')
console.error('errors')
console.warn('Warnings')


//console.table muestra los datos en forma de tabla en la terminal
var tablaData = [
    {
        nombre: 'Sara',
        edad: 20
    },
    {
        nombre: 'Andrés',
        edad: 10
    }
]
console.table(tablaData)


//forma de agrupar datos con console.group
console.group('Conv')
console.log('Hola')
console.log('talking...')
console.log('Bye')
console.groupEnd('Conv')

function a() {
    console.group('a')
    console.log('función a')
    b()
    console.groupEnd('a')
}

function b() {
    console.group('b')
    console.log('función b')
    console.groupEnd('b')
}

console.log('clg groups')
a()


// Funciona como un contador y se resetea con countReset
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')



// Indica el tiempo que le lleve hacer x proceso.
console.time("Cuánto tarda en contar 100 Elementos")
        for (let i = 0; i < 100; i++){
        };
console.timeEnd("Cuánto tarda en contar 100 Elementos")