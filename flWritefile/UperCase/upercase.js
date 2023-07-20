const { log } = require('console');
let fs = require('fs')

let argv = process.argv.slice(2)
let nomeArquivo = argv[0]
fs.readFile(`${nomeArquivo}.txt`, 'UTF8' ,function(error,data) {
    if(error)  console.error('Erro ao ler o arquivo:', error);
    //else
    let Upercase=data.toUpperCase();
    fs.writeFile(`${nomeArquivo}UpperCase.txt`,Upercase,function(error){
        if (error)  {
            console.log('Fudeu');
        } else{
            console.log("Novo Arquivo Criado");
        }


    })
})

