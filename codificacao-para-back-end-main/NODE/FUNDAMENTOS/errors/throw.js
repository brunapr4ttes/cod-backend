//try - catch é o bloco de código para tratar instruções async!
// try{
//     await prisma.eventcreate({
//         data:{

//         }
//     })
// }catch (error) {
//     console.log(error)
// }
// try{
//     //instruções de demora para acontecer
// }catch (error) {
//     console.log(error)
// }

const b = '10'

if(!Number.isInteger(b)){
    console.log('O valor de B não é um valor inteiro')
    throw new Error('O valor de B não é um valor inteiro')
}

console.log('resto dos códigos')