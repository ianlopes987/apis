const express = require('express')
const axios = require('axios') //importando o axios

const app = express()

app.listen('3000')

app.route('/').get((req,res) => {

    axios.get('https://api.github.com/users/jakeliny') //fazendo a requisição atraves da funcao get do axios
    .then(result => res.send(result.data)) // then para caso der certo a promessa
    .catch(error => console.error(error)) // catch para caso a promessa der errado

})