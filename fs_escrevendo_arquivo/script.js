const http = require('node:http')
const fs = require('node:fs');

const PORT = 3333;
//PROTOCOLO
// códigos, métodos, (nos métodos existe uma maneira de como RECEBER as informações) - PARAMS, QUERYS, BODYS, HADERS, etc.
const server = http.createServer((request, response)=>{
    const urlInfo = require('node:url').parse(request.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (err, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data)
            return response.end()
        })
    }else{
        const nameNewLine = name + ',\r\n'
        //WriteFile = Só escrita
        //AppendFile = Escreve e junta
        fs.appendFile('arquivo.txt', nameNewLine, (err)=>{
            response.writeHead(302, {
                Location: '/'
            })
            return response.end()
        })
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})