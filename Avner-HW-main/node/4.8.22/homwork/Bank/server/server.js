const express = require('express')
const app = express()

const path = require('path');
var cookieParser = require('cookie-parser')

const apiPath = path.join(__dirname, "/../api");
// const customersMethods = require(apiPath + "/customersMethods");
// const jsonWebToken = require(apiPath + "/jsonWebToken");
const viewPath = path.join(__dirname, "/../views");
const routesPath = path.join(__dirname, "/../routes");
const apiRouter = require(routesPath + "/apiRouter");
const pagesRouter = require(routesPath + "/pagesRouter");

// let connectedCustomer = {};
// let sumOfconnectedCustomer = 0;

app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter)
app.use('/', pagesRouter)

app.use((req, res, next) => {
    console.log('got req: ', req.url, 'method :', req.method);
    next()
})

app.use("/", express.static(viewPath + "/home"));
app.use("/signUp", express.static(viewPath + "/signUp"));
app.use("/login", express.static(viewPath + "/login"));
app.use("/actionsScreen", express.static(viewPath + "/actionsScreen"));


app.listen(3030, () => {
    console.log(`Server listening on port 3030`)
})