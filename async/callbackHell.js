function soyAsync(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre, "si soy async ");
    miCallback();
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(function () {
    console.log("talk talk talk...");
    callbackTalk();
  }, 1000);
}

function conv(nombre, times, callback) {
    if (times >= 0){
        talk(function() {
            conv(nombre, --times, callback)
        })
    } else {
        Bye(nombre, callback)
    }
}

function Bye(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

//callback hell
/* soyAsync("Susana", function () {
    talk(function () {
      talk(function () {
        talk(function () {
          talk(function () {
            Bye("Susana", function () {
              console.log("Fin del proceso async");
            });
          });
        });
      });
    });
  });*/

  //Refactor
  soyAsync("Susana", function () {
            conv("Susana", 3, function(){
                console.log("Fin del evento")
            })
          });

console.log("Probando async");


