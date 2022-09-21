const express = require('express')
const router = express.Router()
const path = require('path');


// const apiPath = path.join(__dirname, "/../api");
// const jsonWebToken = require(apiPath + "/jsonWebToken");
const pagesPath = path.join(__dirname, "/../pages");


router.get('/', (req, res) => {
    res.sendFile(pagesPath + "/home/home.html")
})

router.get('/signUp', (req, res) => {
    res.sendFile(pagesPath + "/signUp/signUp.html")
})

// router.get('/login', (req, res) => {
//     res.sendFile(viewPath + "/login/login.html")
// })

// router.get('/actionsScreen', (req, res) => {

//     const cookies = req.cookies;
//     if (cookies["loginVerification"]) {
//         const token = cookies["loginVerification"];

//         const tokenResult = jsonWebToken.checkToken(token);

//         if (tokenResult) {
//             res.sendFile(viewPath + "/actionsScreen/actionsScreen.html")
//         }
//     }

// })



module.exports = router;