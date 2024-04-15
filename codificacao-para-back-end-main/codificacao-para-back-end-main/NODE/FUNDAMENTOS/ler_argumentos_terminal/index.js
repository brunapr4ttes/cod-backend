console.log(process.arg)

const args = process.arg.slice(2)

const nome = args[0].split('=')[1]
console.log(nome)

const idade = args[0].split('=')[1]
console.log(idade)
