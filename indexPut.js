const express = require('express') //importando o modulo express

const app = express() //criando a aplicacao do servidor

app.listen('3000') //ouvindo o navegador

app.use(express.json()) //middlware

let author = "ian"

app.route('/').put((req,res)=> {
    author = req.body.author
    res.send(author)
}) //rota que altera o conteudo da variavel author