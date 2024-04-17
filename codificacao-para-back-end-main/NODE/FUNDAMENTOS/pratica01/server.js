//Módulo externo
const minimist = require("minimist");

//Módulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.splice(2))
const a = args["num1"]
const b = args["num2"]

console.log(`A soma de ${a} + ${b} = ${soma(a, b)}`)