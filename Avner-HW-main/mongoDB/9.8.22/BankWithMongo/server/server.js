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




app.get('/', (req, res) => {
    res.sendFile(viewPath + "/home/home.html")
})

app.get('/signUp', (req, res) => {
    res.sendFile(viewPath + "/signUp/signUp.html")
})


app.post("/api/signUp", (req, res) => {
    const userData = req.body;
    let msg = "";
    let result = null;
    
        customersMethods.saveCustomer(userData);
        result = true;
        msg = `signin successful!
        To access the actions screen, you must log in to the system.`;
    
   
    res.send({ result, msg });
})

app.get('/readDB',async (req, res) => {

const db = await customersMethods.readDB();

    res.send({ dataBase: db });
})



app.listen(3030, () => {
    console.log(`Server listening on port 3030`)
})