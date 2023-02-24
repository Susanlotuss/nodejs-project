const sharp = require('sharp');

sharp('kitty.png')
// Resizing an image
.resize(80)
// Changing image color
.grayscale()
// Archivo destino
.toFile('kittyResized.png')
