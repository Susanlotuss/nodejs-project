function soyAsync(nombre) {
    return new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hola " + nombre, "si soy async ");
        resolve(nombre);
      }, 1000);
    })
  }
  
  function talk(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("talk talk talk...");
            resolve(nombre);
          }, 1000);
    })
  }
  
  function bye(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios", nombre);
            resolve()
          }, 1000);
    })
  }

  soyAsync("Susana")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((nombre)=> {
    console.log("Promesa finalizada")
  })
  .catch(error => {
    console.error("Error")
    console.error(error)
  })