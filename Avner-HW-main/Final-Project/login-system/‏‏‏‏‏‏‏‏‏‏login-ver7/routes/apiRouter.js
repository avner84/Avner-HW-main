const express = require('express')
const router = express.Router()
const path = require('path')


const { User } = require('../api/customersMethods');
const pagesPath = path.join(__dirname, "../pages");

const apiPath = path.join(__dirname, "../api");
const crudPath = path.join(__dirname, "../crud");
const emailManagerPath = path.join(__dirname, "../emailManager");

const customersMethods = require(apiPath + "/customersMethods");
const jsonWebToken = require(apiPath + "/jsonWebToken");
const crudMethods = require(crudPath + "/crudMethods");
const emailManager = require(emailManagerPath + "/emailManager");


router.post("/signUp", async (req, res) => {
    const userData = req.body;
    //Creating an object of type "User" and transferring the information received from the client into it
    const newUser = new customersMethods.User(userData.fname, userData.lname, userData.email.toLowerCase(), userData.pass);

    //Checking the validity of details received from the client


    const EmailValidRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/;
    const nameValidRegex = /^([א-תa-zA-Z]{1,32})$/;


    const emailValidationResult = EmailValidRegex.test(newUser.email);
    
    const fNameValidationResult = nameValidRegex.test(newUser.name.fname);
   
    const lNameValidationResult = nameValidRegex.test(newUser.name.lname);
   



    if (!emailValidationResult || !fNameValidationResult || !lNameValidationResult) {

        const msgFromValidationResult = `אחד או יותר מהשדות הבאים (כתובת הדוא"ל, השם הפרטי, שם המשפחה) לא הוזנו לפי כללי הפורמט , אנא תקן אותם ונסה שוב`;
        res.send({ registrationSuccess:false, msg: msgFromValidationResult });
    }

    else {

        //Encrypt the user's password in the created object
        await newUser.encryptPass(userData.pass);


        //If the user already exists, has been activated then it is not possible to register with the same email
        if ((await crudMethods.checkEmailExist(newUser.email)) & (await crudMethods.checkUserActivate(newUser.email))) {
            res.send({ registrationSuccess:false, msg: `כתובת הדוא"ל שהוזנה כבר קיימת במערכת.` });
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

            res.send({ registrationSuccess:true, msg: `ההרשמה הצליחה. להפעלת החשבון יש להכנס לחשבון הדוא"ל ולאשר את ההודעה שנשלחה` });
            const token = jsonWebToken.createToken(newUser);
            emailManager.accountVerificationEmail(newUser.email, token);

        }
    }

})





router.get("/confirmAccount", async (req, res) => {

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






//=======================




module.exports = router;