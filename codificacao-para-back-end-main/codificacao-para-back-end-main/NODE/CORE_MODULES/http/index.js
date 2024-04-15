const http = require('node:http')
// console.log(http)

const server = http.createServer((request, response)=>{
    response.write('oi, 1st server http')
    response.end()
})

server.listen(3333, ()=>{
    console.log('Servidor on PORT: 3333😼')
})