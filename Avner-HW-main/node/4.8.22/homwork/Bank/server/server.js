const express = require('express')
const app = express()

const path = require('path');
var cookieParser = require('cookie-parser')

const apiPath = path.join(__dirname, "/../api");
const customersMethods = require(apiPath + "/customersMethods");
const jsonWebToken = require(apiPath + "/jsonWebToken");
const viewPath = path.join(__dirname, "/../views");

let connectedCustomer = {};
let sumOfconnectedCustomer = 0;

app.use(express.json());
app.use(cookieParser())

app.use((req, res, next) => {
    console.log('got req: ', req.url, 'method :', req.method);
    next()
})


app.use("/", express.static(viewPath + "/home"));
app.use("/signUp", express.static(viewPath + "/signUp"));
app.use("/login", express.static(viewPath + "/login"));
app.use("/actionsScreen", express.static(viewPath + "/actionsScreen"));



app.get('/', (req, res) => {
    res.sendFile(viewPath + "/home/home.html")
})

app.get('/signUp', (req, res) => {
    res.sendFile(viewPath + "/signUp/signUp.html")
})

app.get('/login', (req, res) => {
    res.sendFile(viewPath + "/login/login.html")
})

app.get('/actionsScreen', (req, res) => {

    const cookies = req.cookies;
    if (cookies["loginVerification"]) {
        const token = cookies["loginVerification"];

        const tokenResult = jsonWebToken.checkToken(token);

        if (tokenResult) {
            res.sendFile(viewPath + "/actionsScreen/actionsScreen.html")
        }
    }

})




app.post("/api/signUp", (req, res) => {
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

app.post("/api/login", async (req, res) => {

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



app.get('/api/actionsScreen1', (req, res) => {
    res.send({ connectedCustomer });
})

app.post('/api/actionsScreen2', (req, res) => {
    // console.log("hi from input");
    // console.log("req.body: ", req.body);
    // console.log("req.body.AmountToDeposit: ", req.body.AmountToDeposit);

    const AmountToDeposit = parseInt(req.body.AmountToDeposit);
    sumOfconnectedCustomer += AmountToDeposit;
    connectedCustomer.sum = sumOfconnectedCustomer;

    // console.log('connectedCustomer :', connectedCustomer);
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

app.post('/api/actionsScreen3', (req, res) => {
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


app.post('/api/actionsScreen4', async (req, res) => {
    const codeFromClient = req.body.code;
    const customerFromClient = req.body.connectedCustomer;

    const resultFromCodeCheck = await customersMethods.codeCheck(codeFromClient, customerFromClient.code);
    res.send({ resultFromCodeCheck });
})

app.post('/api/actionsScreen5', async (req, res) => {

    const customerForDelete = req.body.connectedCustomerFromClient;
    const uNameCustomerForDelete = customerForDelete.uName;
    const resultFromDelet = customersMethods.deleteCustomer(uNameCustomerForDelete);

    if (resultFromDelet) {
        res.clearCookie('loginVerification');        
    }
    res.send({ resultFromDelet });

})


app.post('/api/actionsScreen6', async (req, res) => {
    const userNameCustomer = req.body.userName;
   const checkAccountBalanceResult = customersMethods.checkAccountBalance(userNameCustomer);
   res.send({ checkAccountBalanceResult });
})


app.listen(3030, () => {
    console.log(`Server listening on port 3030`)
})