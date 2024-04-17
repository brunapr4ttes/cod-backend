//Síncrona - estática
//File system
const fs = require('fs')

console.log('start')

fs.writeFileSync('Arquivo1.txt', 'Olá')

console.log('End')