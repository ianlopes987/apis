const express = require('express')

const app = express()

app.listen('3000')

let author = "ian"

app.route('/:identificador').delete((req,res)=> {
    author = ""
    res.send(req.params.identificador)
})