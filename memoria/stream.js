import { createReadStream } from 'fs';
import stream from 'stream';
import util from 'util';


// Fixing error: __dirname is not defined in ES module scope
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// end of error


// Stream funciona muy bien para archivos muy grandes
let data = '';

let readableStream = createReadStream(__dirname + '/input.txt');


readableStream.setEncoding('utf8')
readableStream.on('data', function(chunk) {
    data += chunk;
    // console.log(chunk)
})

readableStream.on('end', function() {
    console.log(data)
})

// Stream de escritura: stdout ya es un buffer de escritura
process.stdout.write('Hola')
process.stdout.write('stream')
process.stdout.write('escritura')

// Recibir dato, modificarlo y escribirlo
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this)
}
util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);