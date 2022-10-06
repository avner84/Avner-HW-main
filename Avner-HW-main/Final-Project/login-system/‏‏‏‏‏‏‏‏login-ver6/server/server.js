const express = require('express')
const app = express()

const path = require('path');

const pagesPath = path.join(__dirname, "../pages");
const routesPath = path.join(__dirname, "/../routes");

const apiRouter = require(routesPath + "/apiRouter");
const pagesRouter = require(routesPath + "/pagesRouter");

app.use(express.json());

app.use('/api', apiRouter)
app.use('/', pagesRouter)

app.use((req, res, next) => {
    console.log('got req: ', req.url, 'method :', req.method);
    next()
})


app.use("/", express.static(pagesPath + "/home"));
app.use("/signUp", express.static(pagesPath + "/signUp"));



app.listen(3450, () => {
    console.log(`Server listening on port 3450`)
})