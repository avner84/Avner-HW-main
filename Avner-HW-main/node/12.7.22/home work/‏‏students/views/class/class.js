const tbody = document.getElementById("tbody");

function showStudents() {
    var studentsListToTable = "";


    fetch('/showStudenslist')
        .then(response => response.json())
        .then(objStudents => {

            objStudents.forEach(student => {
                studentsListToTable += ` <tr>
                    <th scope="row">${student.id}</th>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.average}</td>
                    </tr>`;
            });
            tbody.innerHTML = studentsListToTable;
        });




}
showStudents();

// const students = [{
//         id: 1,
//         name: "Reuben",
//         age: 10,
//         average: 70
//     },
//     {
//         id: 2,
//         name: "Simon",
//         age: 13,
//         average: 88
//     },
//     {
//         id: 3,
//         name: "Levi",
//         age: 15,
//         average: 50
//     }, {
//         id: 4,
//         name: "Yehuda",
//         age: 9,
//         average: 98
//     }, {
//         id: 5,
//         name: "Issachar",
//         age: 10,
//         average: 45
//     }, {
//         id: 6,
//         name: "Zebulun",
//         age: 12,
//         average: 78
//     }, {
//         id: 7,
//         name: "Dan",
//         age: 14,
//         average: 86
//     }, {
//         id: 8,
//         name: "Naftali",
//         age: 13,
//         average: 82
//     }, {
//         id: 9,
//         name: "Gad",
//         age: 12,
//         average: 95
//     }, {
//         id: 10,
//         name: "Asher",
//         age: 10,
//         average: 83
//     }, {
//         id: 11,
//         name: "Yosef",
//         age: 10,
//         average: 71
//     }, {
//         id: 12,
//         name: "Benjamin",
//         age: 9,
//         average: 100
//     },
// ]