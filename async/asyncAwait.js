async function soyAsync(nombre) {
    return new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hola " + nombre, "si soy async ");
        resolve(nombre);
      }, 1000);
    })
  }
  
 async function talk(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("talk talk talk...");
            resolve(nombre);
          }, 1000);
    })
  }
  
 async function bye(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios", nombre);
            resolve()
          }, 1000);
    })
  }

async function main() {
    let nombre = await soyAsync("Susana")
    await talk()
    await bye(nombre)
    console.log("Fin del evento")
}

console.log("verificando función async")
main()
console.log("Segunda verificación función async")
  