export async function checkUserName(_uName) {

    var requestOptions = {
        method: 'GET',
    };

    return fetch(`https://mira-webschool-80ba75.appdrag.site/api/auth/checkUserName?uName=${_uName}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            return (result);
        }).catch(() => {
            return false;
        })
}