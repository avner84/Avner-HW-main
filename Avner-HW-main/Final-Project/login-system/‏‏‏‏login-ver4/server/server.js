const express = require('express')
const app = express()

const path = require('path');
const { User } = require('../api/customersMethods');
const pagesPath = path.join(__dirname, "../pages");
const routesPath = path.join(__dirname, "../routes");
const apiPath = path.join(__dirname, "../api");
const crudPath = path.join(__dirname, "../crud");
const emailManagerPath = path.join(__dirname, "../emailManager");

const customersMethods = require(apiPath + "/customersMethods");
const jsonWebToken = require(apiPath + "/jsonWebToken");
const crudMethods = require(crudPath + "/crudMethods");
const emailManager = require(emailManagerPath + "/emailManager");
const pagesRouter = require(routesPath + "/pagesRouter");

app.use(express.json());

app.use((req, res, next) => {
    console.log('got req: ', req.url, 'method :', req.method);
    next()
})


app.post("/api/signUp", async (req, res) => {
    const userData = req.body;

    const newUser = new customersMethods.User(userData.fname, userData.lname, userData.email, userData.pass);
    console.log('newUser :', newUser);
    await newUser.encryptPass(userData.pass);
    console.log('newUser :', newUser);


    if (await crudMethods.checkEmailNotExist(newUser.email)) {
        res.send({ msg: "The email address entered already exists in the system." });
    }

    else {
        crudMethods.createData(newUser);
        newUser.token = jsonWebToken.createToken();
        console.log('newUser with token :', newUser);
        res.send({ msg: "Sign Up Successful" });
        emailManager.accountVerificationEmail(newUser.email);

    }


})


app.use("/", express.static(pagesPath + "/home"));
app.use("/signUp", express.static(pagesPath + "/signUp"));


app.get('/', (req, res) => {
    res.sendFile(pagesPath + "/home/home.html")
})

app.get('/signUp', (req, res) => {
    res.sendFile(pagesPath + "/signUp/signUp.html")
})



app.listen(3450, () => {
    console.log(`Server listening on port 3450`)
})
