const bcrypt = require('bcrypt');

const password = '1234Segura';

// Permite encriptar un stringgenerando un hash
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash)

    // Nos permite comparar el hash con el string (password) y nos devuelve un true o false.
    bcrypt.compare(password, hash, function(err, res) {
        console.log(res)
    })
})