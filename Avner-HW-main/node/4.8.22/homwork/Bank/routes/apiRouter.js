const express = require('express')
const router = express.Router()
const path = require('path')
const apiPath = path.join(__dirname, "/../api")
const customersMethods = require(apiPath + "/customersMethods")
const jsonWebToken = require(apiPath + "/jsonWebToken");



let connectedCustomer = {};
let sumOfconnectedCustomer = 0;
// const viewPath = path.join(__dirname, "/../views");

// var cookieParser = require('cookie-parser')


router.post("/signUp", (req, res) => {

    const userData = req.body;
    let msg = "";
    let result = null;
    if (customersMethods.checkIfUsernameAvailable(userData.uName)) {
        customersMethods.saveCustomer(userData);
        result = true;
        msg = `signin successful!
        To access the actions screen, you must log in to the system.`;
    }
    else {
        result = false;

        msg = "The username entered is not available. Please try another name";
    }
    res.send({ result, msg });

    
})


router.post("/login", async (req, res) => {

    const cookies = req.cookies;
    if (cookies["loginVerification"]) {
        res.clearCookie('loginVerification');
    }

    const userData = req.body;
    let resultObj = await customersMethods.loginCheck(userData);

    let msgFromLoginCheck = "";
    let result = false;
    if (resultObj.result) {

        connectedCustomer = resultObj.user;
        sumOfconnectedCustomer = connectedCustomer.sum;


        const token = jsonWebToken.createToken();
        res.cookie("loginVerification", token);
        msgFromLoginCheck = `Login was successful!
        You can now access the Actions screen.`;
        result = true;
    }
    else {
        msgFromLoginCheck = "Login failed";
        result = false;
    }

    res.send({ msg: msgFromLoginCheck, result });
    return;
});



router.get('/actionsScreen/loadPage', (req, res) => {
    res.send({ connectedCustomer });
})

router.post('/actionsScreen/deposit', (req, res) => {
  
    const AmountToDeposit = parseInt(req.body.AmountToDeposit);
    sumOfconnectedCustomer += AmountToDeposit;
    connectedCustomer.sum = sumOfconnectedCustomer;
   
    let msg = "";
    let result = false;
    let depositResult = customersMethods.updateAccountBalance(connectedCustomer);
    if (depositResult) {
        msg = "Deposit successful. Your account balance has been successfully updated";
        result = true;
    }
    else { msg = "There was an error with the deposit. Please try again later or contact your banker." }

    res.send({ msg, result, connectedCustomer });
})

router.post('/actionsScreen/withdrawal', (req, res) => {
    const withdrawalAmount = parseInt(req.body.withdrawalAmount);
    sumOfconnectedCustomer -= withdrawalAmount;
    connectedCustomer.sum = sumOfconnectedCustomer;

    let msg = "";
    let result = false;
    let depositResult = customersMethods.updateAccountBalance(connectedCustomer);
    if (depositResult) {
        msg = "Withdrawal was successful. Your account balance has been successfully updated";
        result = true;
    }
    else { msg = "There was an error with the Withdrawal. Please try again later or contact your banker." }

    res.send({ msg, result, connectedCustomer });

})


router.post('/actionsScreen/checkCodeBeforeDelete', async (req, res) => {
    const codeFromClient = req.body.code;
    const customerFromClient = req.body.connectedCustomer;

    const resultFromCodeCheck = await customersMethods.codeCheck(codeFromClient, customerFromClient.code);
    res.send({ resultFromCodeCheck });
})

router.post('/actionsScreen/deleteAccount', async (req, res) => {

    const customerForDelete = req.body.connectedCustomerFromClient;
    const uNameCustomerForDelete = customerForDelete.uName;
    const resultFromDelet = customersMethods.deleteCustomer(uNameCustomerForDelete);

    if (resultFromDelet) {
        res.clearCookie('loginVerification');        
    }
    res.send({ resultFromDelet });

})


router.post('/actionsScreen/viewCustomerAccounts', async (req, res) => {
    const userNameCustomer = req.body.userName;
   const checkAccountBalanceResult = customersMethods.checkAccountBalance(userNameCustomer);
   res.send({ checkAccountBalanceResult });
})



module.exports = router;