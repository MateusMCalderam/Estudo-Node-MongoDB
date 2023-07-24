const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blogs')
  .then((connection) => {
    console.log('Conexão bem-sucedida com o MongoDB!');
    console.log(connection);
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });


app.get('/', (req,res) => res.send("Hello World"))

app.listen(port, () => console.log(`Example app listening to port: ${port}`))