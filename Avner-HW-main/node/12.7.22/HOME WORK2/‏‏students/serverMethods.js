const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname + '/././views');

function getStusents() {
    const studentsList = fs.readFileSync(viewsPath + "/data/students.json", "utf-8");
    return studentsList;
}

function deleteStudent() {
    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);
    let studentRemove = studentsListObj.shift();
    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
    return studentRemove;
}

async function createStudent(req) {

    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newStuden =  Buffer.concat(buffers).toString();
    console.log('newStuden :', newStuden);
    let newStudentObj =  JSON.parse(newStuden);

    let studentsList = getStusents();
    let objStudents = JSON.parse(studentsList);

    objStudents.push(newStudentObj);

    const studentsListStr = JSON.stringify(objStudents);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
    
}


async function checkId(req) {

    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newStudent = Buffer.concat(buffers).toString();
    console.log('newStudent :', newStudent);
    let newStudentObj =  JSON.parse(newStudent);

    let id = newStudentObj.id;
    // console.log('id :', id);

    let studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);


    let flag = true;

    studentsListObj.forEach(element => {
        if (element.id == id) {
            flag = false;
            return flag;
        }
    });
    return flag;


    // let buffers = [];
    // for await (const chunk of req) {
    //     buffers.push(chunk);
    // }
    // let newStudent = Buffer.concat(buffers).toString();
    // let newStudentObj = JSON.parse(newStudent);

    // let id = newStudentObj.id;

    // const studentsList = getStusents();
    // const studentsListObj = JSON.parse(studentsList);

    // let flag = true;

    // studentsListObj.forEach(element => {
    //     if (element.id == id) {
    //         flag = false;
    //         return flag;
    //     }
    // });
    // return flag;
}


module.exports = { getStusents, deleteStudent, createStudent, checkId };