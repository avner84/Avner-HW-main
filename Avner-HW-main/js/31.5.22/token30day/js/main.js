function tokenGenerator() {
    const today = new Date();
    const ms = today.getMilliseconds();
    let token = "" + ms;

    for (let i = 0; i < 10; i++) {
        let code = Math.floor(Math.random() * 1000) + 33;
        let char = String.fromCharCode(code);
        token += char;
    }
    token += Math.floor(Math.random() * 899) + 100;

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;


    // Divide Time with a year
    const d = new Date();
    let days = Math.round(d.getTime() / day);
    console.log(days);



    return token;
}

const Users = [{
        name: "Avi",
        mail: "avi@mail.com",
        token: "547αRΠ̢Ђ̴ƈ¼°436",
        password: "abc123",
    },
    {
        name: "Rina",
        mail: "rina@mail.com",
        token: "720ǄJɒĘȭÜΟČĮ140",
        password: "aaa135",
    },
    {
        name: "David",
        mail: "david@mail.com",
        token: "355ĺ˥¸ʫqʑ́͆pϾ222",
        password: "pas123",
    },
    {
        name: "Idit",
        mail: "idit@mail.com",
        token: "363ţΧȃŝϧ̎Ǉ9ʟ824",
        password: "dada000",
    },
    {
        name: "Yossi",
        mail: "yossi@mail.com",
        token: "444żĪíˑϫγøŔĵƢ715",
        password: "ooo111",
    },
];

const user = {
    mail: "yossi@mail.com",
    token: "444żĪíˑϫγøŔĵƢ715"
};

let arrayUsersLogin = [];
let userLogin = {};
let flag = false;

localStorage.setItem("Users", JSON.stringify(Users));
localStorage.setItem("user", JSON.stringify(user));

function tokenLogin() {
    arrayUsersLogin = JSON.parse(localStorage.getItem("Users"));
    userLogin = JSON.parse(localStorage.getItem("user"));


    arrayUsersLogin.forEach((element) => {
        if (element.token == userLogin.token) {
            userLogin.token = tokenGenerator();
            element.token = userLogin.token;
            localStorage.setItem("Users", JSON.stringify(arrayUsersLogin));
            localStorage.setItem("user", JSON.stringify(userLogin));
            flag = true;
        }
    });

    if (!flag) {
        loginWithPass();
    }
}

function loginWithPass() {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerHTML = "The token is incorrect, please try to log in via email and password";
    div.appendChild(h3);
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "email";
    emailInput.id = "emailInput";
    div.appendChild(emailInput);
    const passInput = document.createElement("input");
    passInput.type = "password";
    passInput.placeholder = "password";
    passInput.id = "passInput";
    div.appendChild(passInput);
    const btn = document.createElement("button");
    btn.innerHTML = "Login";
    btn.addEventListener("click", checkLogin);
    div.appendChild(btn);
    document.querySelector("body").appendChild(div);
}

tokenLogin();

function checkLogin() {

    const emailValue = document.querySelector("#emailInput").value;
    const passValue = document.querySelector("#passInput").value;



    arrayUsersLogin.forEach((element) => {
        if (
            element.mail == emailValue &&
            element.password == passValue
        ) {
            document.querySelector("body").innerHTML =
                "<h1>The connection was successful</h1>";
            flag = true;
        }
    });

    if (!flag) {
        alert("The details are incorrect. Please try again");
        document.querySelector("#emailInput").value = "";
        document.querySelector("#passInput").value = "";

    }
}