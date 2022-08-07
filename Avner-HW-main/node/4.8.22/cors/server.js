const express = require('express')
const app = express()

app.put('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ msg: 'Hello from server!' })
})

app.options('/', (req, res) => {
    res.set('Access-Control-Request-Method', '*');
    res.end()
})

app.listen(2323, () => {
     console.log("server listening on 2323") 
    })
