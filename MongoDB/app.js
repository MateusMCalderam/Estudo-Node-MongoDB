const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


//Conectar com o banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/pictures')
  .then(() => {
    console.log('Conexão bem-sucedida com o MongoDB!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });


//Cria um Esquema de como os dados devem ser enviados e quais são obrigatórios  
  const docSchema = new mongoose.Schema({
    title: String,
    description: {type:String, required: true},
    urlPicture: {type:String, required: true} 
  })

//Faz uma conexão do Esquema com o Modelo  
  const Doc = mongoose.model('Doc', docSchema)

//Cria um novo Documento chamado doc que será enviado de acordo com o modelo Doc
  const doc = new Doc({
    title: "Imagem2",
    description: "Esse é a descrição da imagem 2",
    urlPicture: "https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
  })

//Salva o documento no Banco de Dados  
  doc.save().then(doc =>{
    console.log(doc)
  }).catch( err => {
    console.log(err)
  })

let db = mongoose.connection


//Dentro do Banco Aberto, Ele pega os documentos com title, cria uma variavel com o title do documento, depois ele busca os documentos com title e coloca o resultado
//dentro da variavel doc e redireciona para a url que tinha no documento.
db.once("open", () => {
  console.log("Banco Carregado");

  app.get('/:title', async (req,res) => {
    let title = req.params.title

    try{
    let doc = await Doc.findOne({title})

      res.redirect(doc.urlPicture)
   } catch (error){
    res.send(error)  
  }
  })

  })

app.get('/', (req,res) => res.send("Hello World"))

app.listen(port, () => console.log(`Example app listening to port: ${port}`))