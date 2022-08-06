const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname + '/././views');

function getStusents() {
    const studentsList = fs.readFileSync(viewsPath + "/data/students.json", "utf-8");
    return studentsList;
}

async function deleteStudent(req) {

    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newData = Buffer.concat(buffers).toString();
    let newDataObj =  JSON.parse(newData);
   let  id= newDataObj.id;

    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);

    let counterIDs = 0
    // console.log(studentsListObj);

    studentsListObj.forEach((element,index) => {
        if(element.id==id){
            studentsListObj.splice(index,1) 
            counter++;
        }
    });
      
    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
    return `The number of students with ID ${id} deleted is ${counterIDs}`;
    
}

async function setDataOfNewStudent(req) {
    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newStudent = Buffer.concat(buffers).toString();
    let newStudentObj =  JSON.parse(newStudent);
    return newStudentObj;
}

async function createStudent(student) {

    // const buffers = [];
    // for await (const chunk of req) {
    //     buffers.push(chunk);
    // }
    // const newStudent = Buffer.concat(buffers).toString();
    // const newStudentObj =  JSON.parse(newStudent);


    // const newStudentObj1 = await setDataOfNewStudent(req)
    // console.log('newStudentObj1 :', newStudentObj1);
    

    const studentsList =  getStusents();

    const objStudents =  JSON.parse(studentsList);

    objStudents.push(student);

    const studentsListStr = JSON.stringify(objStudents);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
}


async function checkId(id) {
    
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
}


module.exports = { getStusents, deleteStudent, createStudent, checkId, setDataOfNewStudent };