// Expanda o servidor HTTP criado na atividade anterior para lidar com diferentes rotas.
// Implemente uma rota "/home" que responda com a mensagem "Bem-vindo à página inicial!".
// Implemente uma rota "/about" que responda com a mensagem "Sobre nós: somos uma empresa dedicada a...".

const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response)=>{
    if(request.url === '/home'){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<meta charset=utf8>')
        response.write('<h1>Home Page</h1>')
        response.write('<p>Bem-vindo à página inicial!</p>')
        response.end()
    }else if(request.url === '/about'){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write('<meta charset=utf8>')
        response.write('<h1>Page About</h1>')
        response.write('<p>Sobre nós: somos uma empresa dedicada a realizar ações sociais.</p>')
        response.end()
    }else{
        response.writeHead(404, {"Content-Type": "text/html"})
        response.write('<meta charset=utf8>')
        response.write('<h1>Page não encontrada</h1>')
        response.end()
    }
});

server.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}`)
})