const express = require('express')
const app = express()

const path = require('path');
const pagesPath = path.join(__dirname, "/../pages");


const routesPath = path.join(__dirname, "/../routes");
const pagesRouter = require(routesPath + "/pagesRouter");

app.use(express.json());

app.use((req, res, next) => {
    console.log('got req: ', req.url, 'method :', req.method);
    next()
})


app.post("/api/signUp", (req, res) => {
    const userData = req.body;
    console.log('userData :', userData);
  
    res.send({ msg: "sign up successful" });
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
