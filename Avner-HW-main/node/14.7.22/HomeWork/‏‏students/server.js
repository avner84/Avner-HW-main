const http = require("http");
const fs = require("fs");
const path = require("path");

const viewsPath = path.join(__dirname + '/././views');
const studentsMethods = require("./studentsMethods");
const { buffer } = require("stream/consumers");
const PORT = 3000;
const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;

    switch (url) {
        case "/class":
            fs.createReadStream(viewsPath + "/class/class.html").pipe(res);
            break;
        case "/class.css":
            fs.createReadStream(viewsPath + "/class/class.css").pipe(res);
            break;
        case "/class.js":
            fs.createReadStream(viewsPath + "/class/class.js").pipe(res);
            break;
        case "/delete":
            fs.createReadStream(viewsPath + "/delete/delete.html").pipe(res);
            break;
        case "/delete.css":
            fs.createReadStream(viewsPath + "/delete/delete.css").pipe(res);
            break;
        case "/delete.js":
            fs.createReadStream(viewsPath + "/delete/delete.js").pipe(res);
            break;

        case "/showStudenslist":
            const studentsList = studentsMethods.getStusents();
            res.end(studentsList);
            break;
        case "/addStudents":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.html").pipe(res);

            break;
        case "/addStudents.js":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.js").pipe(res);

            break;
        case "/addStudents.css":
            fs.createReadStream(viewsPath + "/addStudents/addStudents.css").pipe(res);
            break;
        case "/api/studentsManager":
            switch (method) {
                case "POST":

                    let newStudentObj = await studentsMethods.setDataOfNewStudent(req)

                    let flag = await studentsMethods.checkId(newStudentObj.id);

                    if (flag) {

                        studentsMethods.createStudent(newStudentObj);
                        res.end("The student was successfully added");
                        break;
                    }

                    else { res.end("The ID number you entered is already occupied. Please enter another ID"); }

                    break;

                case "DELETE":
                    const delBuffers = [];
                    for await (const chunk of req) {
                        delBuffers.push(chunk);
                    }
                    const delObj = JSON.parse(Buffer.concat(delBuffers).toString());
                   

                    let infoAboutDeletedStudents = studentsMethods.deleteStudent(delObj.id);
                    res.end(infoAboutDeletedStudents);
                    break;

                    case "PUT":
                        const updateBuffers = [];
            for await (const chunk of req) {
                updateBuffers.push(chunk);
            }
            const updateObj = JSON.parse(Buffer.concat(updateBuffers).toString());
           


            let flag2 = await studentsMethods.checkId(updateObj.id);
           
            if (flag2) { //if flag=true - id is not exist

                res.end("The ID number entered does not exist in the system")

            }
            else {
                studentsMethods.updateStudent(updateObj);
                res.end("Student details updated successfully");

            }
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
       
    }
});

server.listen(PORT);
console.log("Listening to Port 3000");

