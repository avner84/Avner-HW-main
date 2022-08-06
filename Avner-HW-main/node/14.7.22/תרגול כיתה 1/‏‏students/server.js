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
            const delBuffers = [];
            for await (const chunk of req) {
                delBuffers.push(chunk);
            }
            const delObj = JSON.parse(Buffer.concat(delBuffers).toString());
            console.log('delObj :', delObj);

            let infoAboutDeletedStudents = serverMethods.deleteStudent(delObj.id);
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

        case "/update":
            fs.createReadStream(viewsPath + "/update/update.html").pipe(res);
            break;
        case "/update.css":
            fs.createReadStream(viewsPath + "/update/update.css").pipe(res);

            break;
        case "/update.js":
            fs.createReadStream(viewsPath + "/update/update.js").pipe(res);

            break;
        case "/updateStudent":
            const updateBuffers = [];
            for await (const chunk of req) {
                updateBuffers.push(chunk);
            }
            const updateObj = JSON.parse(Buffer.concat(updateBuffers).toString());
            console.log('updateObj :', updateObj);

            
            let flag = await serverMethods.checkId(updateObj.id);
            console.log('flag :', flag);
            if (flag) { //if flag=true - id is not exist
                
                res.end("The ID number entered does not exist in the system")   
             
            }
            else {
                serverMethods.updateStudent(updateObj);
                res.end("Student details updated successfully");   

            }

            

            break;

    }
});

server.listen(PORT);
console.log("Listening to Port 3000");

