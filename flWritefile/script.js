const { log } = require('console')
let fs = require('fs')
/* 
//Cria arquivo com nome Teste.txt, depois string do texto e uma função caso de erro
fs.writeFile('Teste.txt', 'Hello World', function(error) {
    if(error) console.error('Erro ao ler o arquivo:', error);
    //else
    console.log('Arquivo Criado');
})

fs.appendFile('Teste.txt', 'Texto Incrementado', function(error) {
    if(error) console.error('Erro ao ler o arquivo:', error);
    //else
    console.log('Texto Modificado');
})

//apaga texto 
fs.unlink('Teste.txt', function(error) {
    if(error){throw error}
    //else
    console.log('Texto Deletado');  
})

//Renomeia o Arquivo
fs.rename('Teste.txt', 'NovoNome.txt', function(error) {
    if(error) console.error('Erro ao ler o arquivo:', error);
    //else
    console.log('Texto Renomeado');
}) */

//Mostra o conteúdo do Arquivo
fs.readFile('NovoNome.txt', 'UTF8' ,function(error,data) {
    if(error)  console.error('Erro ao ler o arquivo:', error);
    //else
    console.log(data);
})