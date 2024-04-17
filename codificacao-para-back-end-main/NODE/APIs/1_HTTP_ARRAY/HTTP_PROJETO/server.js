import http from 'node:http'

const PORT = 3333

const participants = []
const server = http.createServer((request, response)=>{
    const {url, method} = request
    console.log('URL: ',url)

    if(url === '/participants' && method === 'GET'){
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(participants));
    }else if(url === '/participants/count' && method === 'GET'){
        console.log('COUNT participants')
    }else if(url === '/participants/count/over18' && method === 'GET'){
        const olderAge = participants.filter((participant)=> participant.agr >= 18).length

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(olderAge))
    }else if(url === '/participants/city/most' && method === 'GET'){
        const countCity = participants.reduce((acc, participant)=>{
            acc[participant.city] = (acc[participant.city] || 0) + 1
            return acc
        }, {})
        console.log(countCity)
            //console.log(Object.entries(countCity))
            let qtdDeParticipantes = 0
            let cidadeComMaiorNumDeParticipantes = ''
        Object.entries(countCity).forEach(([city, count])=>{
            if(count > qtdDeParticipantes){
                qtdDeParticipantes = count
                cidadeComMaiorNumDeParticipantes = city
            }
        })
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify({"Quantidade total de participante": qtdDeParticipantes, "Cidade com maior número de participantes":cidadeComMaiorNumDeParticipantes,}))
    }else if(url.startsWith('/participants/') && method === 'GET'){
        const participantId = split('/')[2]
        const findParticipant = participants.find((participant)=> {
            return participant.id == participantId
        })

        if(!findParticipant){
            response.writeHead(404, {"Content-type":"application/json"})
            return response.end(JSON.stringify({message: ''}))
        }
    }else if(url === '/participants' && method === 'POST'){
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk
        })
        request.on('end', ()=>{
            const participant = JSON.parse(body)
            if(participant.age < 16){
                response.writeHead(403, {"Content-Type": "application/json"});
                return response.end(JSON.stringify({message: 'Apenas usuários maiores que 15 anos'}))
            }
            if(participant.password !== participant.confirmPassword){
                //erro
                response.writeHead(400, {"Content-Type": "application/json"});
                return response.end(
                    JSON.stringify({message: "As senhas fornecidas não correspondem"})
                )
            }
            participant.id = participants.length + 1
            participants.push(participant)
            response.writeHead(201, {'Content-Type': 'application/json'});
            return response.end(JSON.stringify(participant))

            console.log(participant);
            response.end()
        })
    }else if(url.startsWith('/participants/') && method === 'PUT'){
        const participantId = url.split('/')[2]

        let body = ''
        request.on('data', (chunk)=>{
            body += chunk
        })
        request.on('end', ()=>{
            const updatedParticipant = JSON.parse(body)
            const index = participants.findIndex((participant) => participant.id == participantId);
        
        if(index !== -1){
            participants[index] = {...participants[index], ...updatedParticipant}
            response.setHeader('Content-type', 'application/json')
            return response.end(JSON.stringify(participant[index]))
        }else{
            response.writeHead(404, {'Content-type': 'application/json'})
            return response.end(JSON.stringify({message: "Participante não encontrado"}))
        }
    });
    }else if(url.startsWith('/participants/') && method === 'DELETE'){
        const participantId = url.split("/")[2]
        const index = participants.findIndex((participant)=> participant.id == participantId)

        if(index !== -1){
            participants.splice(index,1);
            response.writeHead(200, {"Content-type":"application/json"});
            response.end(JSON.stringify({message: "Participante deletado"}))
        }else{
            response.writeHead(404, {"Content-type":"application/json"});
            response.end(JSON.stringify({message: "Participante não encontrado"}))
        }
    }else{
        response.writeHead(404, {"Content-Type": "application/json"});
        response.end(JSON.stringify({ codigo: 404, message: "Página não encontrada"}));
    }
});

server.listen(PORT, ()=>{
    console.log('Servidor está ON '+PORT)
})