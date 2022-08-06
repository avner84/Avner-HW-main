const http = require("http");
const fs = require("fs");
const PORT = 3434;
const server = http.createServer((req, res) => {
    const method = req.method;
    console.log("method", method);
    const url = req.url;
    console.log("url", url);

    switch (url) {
        case "/":
            const homePage = fs.readFileSync("./views/home/home.html");
            res.end(homePage);
            break;
        case "/home.css":
            const homeCss = fs.readFileSync("./views/home/home.css");
            res.end(homeCss);
            break;
        case "/home.js":
            const homeJs = fs.readFileSync("./views/home/home.js");
            res.end(homeJs);
            break;
        case "/login":
            const loginPage = fs.readFileSync("./views/login/login.html");
            res.end(loginPage);
            break;
        case "/login.css":
            const loginCss = fs.readFileSync("./views/login/login.css");
            res.end(loginCss);
            break;
        case "/login.js":
            const loginJS = fs.readFileSync("./views/login/login.js");
            res.end(loginJS);
            break;
        case "/404.css":
            const _404Css = fs.readFileSync("./views/404/404.css");
            res.end(_404Css);
            break;

        case "/dataFromSrver":
            res.end("btn cliced");
            break;

        default:
            const pageNotFound = fs.readFileSync("./views/404/404.html");
            res.end(pageNotFound);
            break;
    }
});

server.listen(PORT);
console.log("server listening on port: 3434");