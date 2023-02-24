function saludar() {
    console.log('Hola a todos')
}


// Este puede ser una función o un objeto, como función:
//export default {saludar}


// como objeto (función + prop1):
export default {
    saludar,
    prop1: 'Soy un export objeto'
}