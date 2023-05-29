const express = require('express') //importando o modulo express

const app = express() //criando a aplicacao do servidor

app.listen('3000') //ouvindo o navegador

app.use(express.json()) //middlware

app.route('/').post((req,res)=> console.log(req.body)) //rota que envia os dados via post