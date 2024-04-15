// Atividade 6: Pesquise outros métodos e propriedades do módulo OS
// Crie um código que exiba informações adicionais do sistema operacional, como número IPV4 e IPV6 de rede, 
// Informações de tempo de atividade do sistema operacional em Horas, minutos e segundos
// Diretórios temporários.

const os = require ('node:os')

function segundosParaHorasMin(segundos) {
    const horas = Math.floor(segundos / 3600); //converter segundos em hores dividindo por 3600
    const minutos = Math.floor((segundos % 3600) / 60); //converter segundos horas, pega o resto e divide por 60 para mostrar os minutos
    const segundosRestantes = (segundos % 60).toFixed(0); //após converter em horas, depois minutos, pega o resto, que são os segundos
    return { horas, minutos, segundos: segundosRestantes };
}

const tempoSegundos = os.uptime(); 

const tempoAtividade = segundosParaHorasMin(tempoSegundos);

console.log(`${tempoAtividade.horas} horas, ${tempoAtividade.minutos} minutos e ${tempoAtividade.segundos} segundos.`);
