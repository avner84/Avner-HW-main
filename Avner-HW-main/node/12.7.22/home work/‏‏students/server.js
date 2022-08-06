const http = require("http");
const fs = require("fs");
const path = require("path");

const viewsPath = path.join(__dirname + '/././views');
const serverMethods = require("./serverMethods");
const { buffer } = require("stream/consumers");
const PORT = 3000;
const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;

    switch (url) {
        case "/class":
            const classPage = fs.readFileSync(viewsPath + "/class/class.html");
            res.end(classPage);
            break;
        case "/class.css":
            const classCss = fs.readFileSync(viewsPath + "/class/class.css");
            res.end(classCss);
            break;
        case "/class.js":
            const homeJs = fs.readFileSync(viewsPath + "/class/class.js");
            res.end(homeJs);
            break;
        case "/delete":
            const loginPage = fs.readFileSync(viewsPath + "/delete/delete.html");
            res.end(loginPage);
            break;
        case "/delete.css":
            const loginCss = fs.readFileSync(viewsPath + "/delete/delete.css");
            res.end(loginCss);
            break;
        case "/delete.js":
            const loginJS = fs.readFileSync(viewsPath + "/delete/delete.js");
            res.end(loginJS);
            break;
        case "/removeStudent":
            var infoAboutDeletedStudents = serverMethods.deleteStudent(req);
                       res.end(infoAboutDeletedStudents);
            break;
        case "/showStudenslist":
            const studentsList = serverMethods.getStusents();
            res.end(studentsList);
            break;
        case "/addStudents":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.html").pipe(res);
            // const addStudentsPage = fs.readFileSync(viewsPath+"/addStudents/addStudents.html");
            // res.end(addStudentsPage);
            break;
        case "/addStudents.js":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.js").pipe(res);
            // const addStudentsJs = fs.readFileSync(viewsPath+"/addStudents/addStudents.js");
            // res.end(addStudentsJs);
            break;
        case "/addStudents.css":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.css").pipe(res);
            break;
        case "/api/studentsManager":
            switch (method) {
                case "POST":

                    let newStudentObj = await serverMethods.setDataOfNewStudent(req)
                    // console.log(newStudentObj);

                    let flag = await serverMethods.checkId(newStudentObj.id);
                    // console.log('flag :', flag);
                    if (flag) {
                        // console.log("yes");
                        serverMethods.createStudent(newStudentObj);
                        res.end("The student was successfully added");
                        break;
                    }
                    //     // else{
                    //     //     console.log("no");
                    //     // }
                    // if (flag) {
                    //     // console.log('flag :', flag);
                    //     serverMethods.createStudent(req);
                    //     
                    // }
                    else { res.end("The ID number you entered is already occupied. Please enter another ID"); }
                    // // res.end("test");
                    break;

            }

            break;
    }
});

server.listen(PORT);
console.log("Listening to Port 3000");

