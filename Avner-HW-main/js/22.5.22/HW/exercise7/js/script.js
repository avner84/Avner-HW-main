const users = [
    { fullName: "Yossi Cohen", userName: "yos55", password: "1234" },
    { fullName: "Batya Levi", userName: "Barbi", password: "98765" },
    { fullName: "Moshe Israeli", userName: "momo", password: "1111" },
];

let counter = 0;

if (counter > 2) {
    //מחיקת האפליקציה מהכפתור
}

function check() {
    counter++;

    document.getElementById("userName").style.border = "";
    document.getElementById("password").style.border = "";

    var uName = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;

    if (uName != "" && pass != "") {

        for (let i = 0; i < users.length; i++) {

            if (users[i].userName == uName && users[i].password == pass) {
                document.querySelector("main").innerHTML = `<h1>Welcome ${users[i].fullName}</h1>`;
                break;

            } else if (i == users.length - 1) {

                alert("There is an error entering one of the details");
            }



        }

    } else {
        if (uName == "") {
            document.getElementById("userName").style.border = "2px solid red";
        }
        if (pass == "") {
            document.getElementById("password").style.border = "2px solid red"; {}
        }




    }



};