const fs = require('node:fs')
const http = require('node:http')

const server = http.createServer((request, response)=>{
    fs.readFile('index.html', (err, data)=>{
        if(err){
            throw new Error('Erro ao ler o arquivo')
        }
        response.writeHead(200, {'Content-type': 'text/html'})
        response.write(data)
        return response.end()
    })
})

server.listen(3333, ()=>{
    console.log('Servidor on PORT 3333')
})