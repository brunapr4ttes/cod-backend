const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt(
        {
            name:'p1',
            message:'qual a primeira nota'
        },
        {
            name:'p2',
            message:'qual a seg nota'
        }
    )
    .then((answers)=>{
        console.log(answers)
        const media = (Number(answers.p1)+Number(answers.p2))/2
    })
    .catch()