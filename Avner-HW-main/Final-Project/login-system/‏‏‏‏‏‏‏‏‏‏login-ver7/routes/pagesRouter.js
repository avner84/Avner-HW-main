const express = require('express')
const router = express.Router()
const path = require('path');


const pagesPath = path.join(__dirname, "../pages");

router.get('/', (req, res) => {
    res.sendFile(pagesPath + "/home/home.html")
})

router.get('/signUp', (req, res) => {
    res.sendFile(pagesPath + "/signUp/signUp.html")
})



module.exports = router;