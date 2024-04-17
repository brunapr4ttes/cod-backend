//Arquivo async
const fs = require('fs')

console.log('start')

fs.writeFile('Arquivo2.txt', 'Olá', ()=>{
    setTimeout(()=>{
        console.log('Arquivo criado')
    }, 3000)
})

console.log('End')