var digit = null;
var myTimeout = null;



export function checkCode(d) {

    digit = d;


    // console.log(d);
}

export function check() {


}

export function getUser(userId, userPass) {

    var requestOptions = {
        method: 'GET',
    };

    fetch(`https://mira-webschool-80ba75.appdrag.site/api/auth/getUser\n\n?id=${userId}&pass=${userPass}`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}