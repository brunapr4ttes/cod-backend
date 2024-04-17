// Atividade 3: Informações de Memória
// Escreva um código que exiba a quantidade total de memória do sistema em bytes.
// Em seguida, converta o valor para uma unidade mais legível, como kilobytes (KB), megabytes (MB) ou gigabytes (GB).

const os = require ('node:os')

console.log(os.totalmem())

console.log(os.totalmem()/1000)