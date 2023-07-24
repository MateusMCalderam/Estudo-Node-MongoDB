const express = require('express');
const path = require('path');

const app = express();


app.use("/meusite",express.static(path.join(__dirname,'client')))

let consoleMethod =  (req,res, next) => {
    console.log(req.method);
    next()
}

let hello =  (req,res) => {
    res.send("<h1>Olá mundo editado</h1>")
}


app.use("/",consoleMethod)
app.get("/", hello)

app.post("/", hello)
/* 
app.put("/", (req,res) => {
    res.send("<h1>Olá mundo do put</h1>")

})

app.delete("/", (req,res) => {
    res.send("<h1>Olá mundo do delete</h1>")

})
 */
const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server Running on port: ${PORT}`);
})
