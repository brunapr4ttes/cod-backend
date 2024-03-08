function calcularfolha(){
    const idfuncio = document.getElementById("codigo").value.toUpperCase(10)
    const turno = document.getElementById("turno").value
    const categoria = document.getElementById("categoria").value
    const horast = document.getElementById("horast").value
    let salariomin = 450
    let salarioinicial

if (turno !== "M" && turno !== "V" && turno !== "N") {
   alert('Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno.')
}

if (categoria !== "G" && categoria !== "O") {
    alert('Digite "G" para Gerente ou "O" para Operário.')
}

if (categoria == "G" && turno == "N") {
    salarioinicial = salariomin + (horast * 0.18)
} else if (categoria == "G" && turno == "M" || turno == "V"){
    salarioinicial = salariomin + (horast * 0.15)
} else if (categoria == "O" && turno == "N") {
    salarioinicial = salariomin + (horast * 0.13)
} else if (categoria == "O" && turno == "M" || turno == "V"){
    salarioinicial = salariomin + (horast * 0.10)
}  

let auxilioalim 

if (salarioinicial <= 300) {
    auxilioalim = salarioinicial * 0.20
} else if (salarioinicial > 300 && salarioinicial <=600){
    auxilioalim = salarioinicial * 0.15
} else if (salarioinicial > 600){
    auxilioalim = salarioinicial * 0.05
}
document.write(salarioinicial)
document.write(auxilioalim)
}

// if (idfuncio > 10) {
//     alert('Não existe nenhum funcionário cadastrado com esse código! Digite um código válido!')
// }


// function calcularfolha(){
//     const idfuncio = document.getElementById("codigo").value.toUpperCase(10)
//     const turno = document.getElementById("turno").value
//     const categoria = document.getElementById("categoria").value
//     const valorhorast = document.getElementById("horast").value
//     const horast = document.getElementById("horast").value
//     let salariomin = 450


// if (turno !== "M" && turno !== "V" && turno !== "N") {
//    alert('Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno.')
// }

// if (categoria !== "G" && categoria !== "O") {
//     alert('Digite "G" para Gerente ou "O" para Operário.')
// }

// if (categoria == "G" && turno == "N") {
//     valorhorast = salariomin * 0.18
// } else if (categoria == "G" && turno == "M" || turno == "V"){
//     valorhorast = salariomin * 0.15
// } else if (categoria == "O" && turno == "N") {
//     valorhorast = salariomin * 0.13
// } else if (categoria == "O" && turno == "M" || turno == "V"){
//     valorhorast = salariomin * 0.10
// }  

//     let salarioinicial = valorhorast * horast
//     document.write(salarioinicial)


// let auxilioalim 

// if (salarioinicial <= 300) {
//     auxilioalim = salarioinicial * 0.20
// } else if (salarioinicial > 300 && salarioinicial <=600){
//     auxilioalim = salarioinicial * 0.15
// } else if (salarioinicial > 600){
//     auxilioalim = salarioinicial * 0.05
// }

// document.write(auxilioalim)
// }

// if (idfuncio > 10) {
//     alert('Não existe nenhum funcionário cadastrado com esse código! Digite um código válido!')