// 03 - Extração de informações de uma URL completa
// Escreva um programa em Node.js que receba uma URL completa como entrada e exiba as seguintes informações extraídas da URL:
// Protocolo utilizado
// Nome do host
// Caminho da URL
// Parâmetros de consulta (se houver)
// Fragmento (hash) da URL (se houver)
// Exemplo de entrada: https://www.example.com/path/to/resource?param1=value1#section

// Saída esperada: 
// Protocolo: https

const url = require('url')
const adress = 'https://www.example.com/path/to/resource?param1=value1#section'
const parseUrl = new url.URL(adress);

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.searchParams)
console.log(parseUrl.hash)
