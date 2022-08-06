const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname + '/././views');

function getStusents() {
    const studentsList = fs.readFileSync(viewsPath + "/data/students.json", "utf-8");
    return studentsList;
}

function deleteStudent(id) {

    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);

   
    studentsListObj.forEach((element,index) => {
        if(element.id==id){
            studentsListObj.splice(index,1) 
           
        }
    });
      
    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
    let msg = `Student with ID: ${id} successfully deleted`;
    console.log('msg :', msg);
    return msg;
    
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

function updateStudent(studentUpdateObj){
    
    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);

   
    studentsListObj.forEach((element,index) => {
        if(element.id==studentUpdateObj.id){
            studentsListObj[index] = studentUpdateObj;
           
        }
    });
      
    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
}



module.exports = { getStusents, deleteStudent, createStudent, checkId, setDataOfNewStudent, updateStudent };