//MOSTRA O QUE FOI DIGITADO NO TERMINAL
//console.log(process.argv)


// tira o node e o script.js
let argv = process.argv.slice(2) 

console.log(Number(argv[0])+Number(argv[1]));