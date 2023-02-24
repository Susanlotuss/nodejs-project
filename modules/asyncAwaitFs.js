const fs = require('fs').promises

const CONTENIDO =  `New file`

const writeRead = async() => {
    try {
        fs.writeFile(CONTENIDO, 'Testing file-system async await');
        console.log('writing')
        const file = await fs.readFile(CONTENIDO, { encoding: 'utf-8' });
        console.log(file)
    } catch(error) {
        console.error(error)
    }
}
writeRead();