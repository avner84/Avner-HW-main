function addUser() {
    var formdata = new FormData();
    formdata.append("uName", "haimBh");
    formdata.append("fName", "Haim");
    formdata.append("password", "888");
    formdata.append("lName", "Ben Hamo");
    formdata.append("role", "3");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/addUser\n", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getUsers() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/getUsers\n\n", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function deleteUser() {

    var formdata = new FormData();
    formdata.append("id", "12");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/deleteUser\n\n", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function editUser() {
    var formdata = new FormData();
    formdata.append("uName", "banana");
    formdata.append("fName", "Ben");
    formdata.append("lName", "Eli");
    formdata.append("pass", "0000");
    formdata.append("id", "5");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/editUser\n\n", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};

// function checkUserName() {

//     var settings = {
//         "url": "https://mira-webschool-80ba75.appdrag.site/api/auth/checkUserName",
//         "data": {
//             "uName": "Yossi55",
//             "AD_PageNbr": "1",
//             "AD_PageSize": "500"
//         },
//         "method": "GET",
//         "async": true,
//         "crossDomain": true,
//         "processData": true
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response); // TODO: Do something with the result
//     });
// }

// checkUserName();

function getUser(userId, userPass) {

    var requestOptions = {
        method: 'GET',

    };

    fetch(`https://mira-webschool-80ba75.appdrag.site/api/auth/getUser\n?id=${userId}&pass=${userPass}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}