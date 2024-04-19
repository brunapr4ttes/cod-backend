import http from 'node:http'
const  PORT = 3333

// http -> protocolo de comunicação

//Métodos: GET (solicitar informação), POST (cadastro de algo), PUT (atualizar o objeto como um todo), PATH (atualizar uma parte específica do projeto), DELETE (excluir/deletar recurso)

/**
//REQUISIÇÃO
1. Corpo da requisição (request.body) (Utiliza o POST)
2. Parâmetros de busca (Search PARAMS, QUERY PARAMS)
https://localhost:3333/users/2 (Utiliza o GET)
3. Parâmetros de rota (ROUTE PARAMS) - https://localhost:3333/users/1 (Utiliza o PUT, PATH, DELETE)
 */

const users = []
const server = http.createServer((request, response)=>{
    const {method, url} = request
    
    if(url === '/users' && method === "GET"){//Buscar todos os usuários
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(users))
    }else if(url.startsWith('/users/') && method === 'GET'){//Buscar um único usuário
        const userId = url.split('/')[2]
        const user = users.find((user) => user.id == userId)
        console.log(user)
        if(user){
            response.setHeader("Content-type", "application/json");
            response.end(JSON.stringify(user))
        }else{
            response.writeHead(404, {"Content-type": "application/json"});
            response.end(JSON.stringify({ message: "Usuário não encontrado"}))
        }
    }else if(url === '/users' && method === "POST"){//Cadastrar um usuário
        let body = ''
        request.on('data',(chunk)=>{
            body += chunk.toString() //chunk = pedacinhos das informações
        }) //"on" É uma escuta
        request.on('end', ()=>{
            const newUser = JSON.parse(body)
            newUser.id = users.length + 1
            users.push(newUser)  
            response.writeHead(201, {'Content-type': 'application/json'})//Já que está trabalhando com objetos, usa ":" ao invés de ","
            response.end(JSON.stringify(newUser))
        })
    }else if(url.startsWith('/users/') && method === "PUT"){//Atualizar um usuário
            const userId = url.split('/')[2]
            console.log(userId)

            let body = '';
            request.on('data', (chunk) =>{
                body += chunk.toString();
            })
            request.on('end', () =>{
                const updateUser = JSON.parse(body)
                const index = users.findIndex((user)=> user.id == userId)
                if(index !== -1){
                    users[index] = {...users[index, updateUser]}
                    response.setHeader('Content-type', 'application/json')
                }else{
                    response.writeHead(404, {"Content-Type": "application/json"});
                    response.end(JSON.stringify({message: "Erro ao tentar atualizar"}))
                }
            })
    }else if(url.startsWith('/users/') && method === 'DELETE'){//Deletar um usuário
        const userId = url.split('/')[2]
        const index = users.findIndex((user)=> user.id == userId);
        if(index !== -1) {
            users.splice(index,1)
            response.setHeader("Content-type", "application/json");
            response.end(JSON.stringify({message: "Usuário excluído"}));
        }else{
            response.writeHead(404, {"Content-Type": "application/json"});
            response.end(JSON.stringify({message: "Erro ao tentar excluir o usuário"}));
        }
    }else {//Recurso não encontrado
        response.writeHead(404, {"Content-Type": "application/json"});
        response.end(JSON.stringify({message: "Página não encontrada"}))
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})

//Códigos: 