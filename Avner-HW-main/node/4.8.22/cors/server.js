const express = require('express')
const app = express()

app.get('/cors', (req, res) => {
    res.send( {msg: 'Hello from server!'})
})