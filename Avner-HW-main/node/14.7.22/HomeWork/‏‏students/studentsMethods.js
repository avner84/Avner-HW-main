const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname + '/././views');
const dataPath = path.join(__dirname + '/././data');

function getStusents() {
    const studentsList = fs.readFileSync(dataPath + "/students.json", "utf-8");
    return studentsList;
}

function deleteStudent(id) {

    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);


    studentsListObj.forEach((element, index) => {
        if (element.id == id) {
            studentsListObj.splice(index, 1)

        }
    });

    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(dataPath + "/students.json", studentsListStr);
    let msg = `Student with ID: ${id} successfully deleted`;

    return msg;

}

async function setDataOfNewStudent(req) {
    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newStudent = Buffer.concat(buffers).toString();
    let newStudentObj = JSON.parse(newStudent);
    return newStudentObj;
}

async function createStudent(student) {

    const studentsList = getStusents();

    const objStudents = JSON.parse(studentsList);

    objStudents.push(student);

    const studentsListStr = JSON.stringify(objStudents);
    fs.writeFileSync(dataPath + "/students.json", studentsListStr);
}


async function checkId(id) {

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
}

function updateStudent(studentUpdateObj) {

    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);


    studentsListObj.forEach((element, index) => {
        if (element.id == studentUpdateObj.id) {
            studentsListObj[index] = studentUpdateObj;

        }
    });

    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(dataPath + "/students.json", studentsListStr);
}



module.exports = { getStusents, deleteStudent, createStudent, checkId, setDataOfNewStudent, updateStudent };