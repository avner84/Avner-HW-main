const http = require("http");
const fs = require("fs");
const path = require("path");

const viewsPath = path.join(__dirname+'/././views');
const serverMethods = require("./serverMethods")
const PORT = 3000;
const server = http.createServer((req, res) => {

    const url = req.url;

    switch (url) {
        case "/class":
            const classPage = fs.readFileSync(viewsPath+"/class/class.html");
            res.end(classPage);
            break;
        case "/class.css":
            const classCss = fs.readFileSync(viewsPath+"/class/class.css");
            res.end(classCss);
            break;
        case "/class.js":
            const homeJs = fs.readFileSync(viewsPath+"/class/class.js");
            res.end(homeJs);
            break;
        case "/delete":
            const loginPage = fs.readFileSync(viewsPath+"/delete/delete.html");
            res.end(loginPage);
            break;
        case "/delete.css":
            const loginCss = fs.readFileSync(viewsPath+"/delete/delete.css");
            res.end(loginCss);
            break;
        case "/delete.js":
            const loginJS = fs.readFileSync(viewsPath+"/delete/delete.js");
            res.end(loginJS);
            break;
        case "/removeStudent":
            var studentRemoveObj = serverMethods.deleteStudent();
            var studentRemoveStr = JSON.stringify(studentRemoveObj)
            res.end(studentRemoveStr);
            break;
        case "/showStudenslist":
            const studentsList = serverMethods.getStusents();
            res.end(studentsList);
            break;
    }
});

server.listen(PORT);