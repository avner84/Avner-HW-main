const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname+'/././views');

function getStusents() {
    const studentsList = fs.readFileSync(viewsPath+"/data/students.json", "utf-8");
    return studentsList;
}

function deleteStudent() {
    const studentsList = getStusents();
    var studentsListObj = JSON.parse(studentsList);
    var studentRemove = studentsListObj.shift();
    var studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath+"/data/students.json", studentsListStr);
    return studentRemove;
}

module.exports = { getStusents, deleteStudent };