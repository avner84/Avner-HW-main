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
    await newUser.encryptPass(userData.pass);


    //If the user already exists, has been activated then it is not possible to register with the same email
    if ((await crudMethods.checkEmailExist(newUser.email)) & (await crudMethods.checkUserActivate(newUser.email))) {
        res.send({ msg: `כתובת הדוא"ל שהוזנה כבר קיימת במערכת.` });
    }

    else {

        //If the user already exists, but has not been activated, just update it (does not create a new user)
        if ((await crudMethods.checkEmailExist(newUser.email)) & (!await crudMethods.checkUserActivate(newUser.email))) {
            crudMethods.updateUserDetails(newUser)
        }

        //If the user does not exist then it will create a new account
        else {
            crudMethods.createData(newUser);

        }
        
        res.send({ msg: `ההרשמה הצליחה. להפעלת החשבון יש להכנס לחשבון הדוא"ל ולאשר את ההודעה שנשלחה` });
        const token = jsonWebToken.createToken(newUser);
        emailManager.accountVerificationEmail(newUser.email, token);

    }


})





app.get("/api/confirmAccount", async (req, res) => {
    
    const token = req.query.token;
       
    const doseTokenMatch = await jsonWebToken.checkToken(token);
    console.log('doseTokenMatch :', doseTokenMatch);

    if (doseTokenMatch) {

        const tokenUserInformation = jsonWebToken.decryptToken(token);

        crudMethods.activateUserAccount(tokenUserInformation.email);
        res.sendFile(pagesPath + "/home/home.html")
    }

    else {

    }

});




app.use("/", express.static(pagesPath + "/home"));
app.use("/signUp", express.static(pagesPath + "/signUp"));


app.get('/', (req, res) => {
    res.sendFile(pagesPath + "/home/home.html")
})

app.get('/signUp', (req, res) => {
    res.sendFile(pagesPath + "/signUp/signUp.html")
})



app.listen(3450, () => {
    console.log(`Server listeni ng on port 3450`)
})
