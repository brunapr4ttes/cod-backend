const http = require('node:http')
const fs = require('node:fs');

const PORT = 3333;

const server = http.createServer((request, response)=>{
    const {method, url} = request
    if(url === '/cadastrar' && method === "POST"){
        console.log('a')
    }
},
server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
}))