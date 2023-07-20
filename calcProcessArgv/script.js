//MOSTRA O QUE FOI DIGITADO NO TERMINAL
//console.log(process.argv)
/* let soma = require('./soma')
let multiplicacao = require('./multiplicacao') */

let calc=require('./calc')

// tira o node e o script.js
let argv = process.argv.slice(2) 

let a = Number(argv[1])
let b = Number(argv[2])
let c = ""
if (argv[0] == 'm') {
   // c = multiplicacao(a,b)
   c = calc.multiplicacao(a,b)

} else if (argv[0] == "s") {
    //c = soma(a,b)
    c = calc.soma(a,b)
} else {
    console.log('Opção Inválida');
}

console.log(c);