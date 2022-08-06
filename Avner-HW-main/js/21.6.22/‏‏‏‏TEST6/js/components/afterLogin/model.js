export async function getMoreUsers(belowRole) {

    var requestOptions = {
        method: 'GET',
              };
      
     return fetch(`https://mira-webschool-80ba75.appdrag.site/api/auth/getMoreUsers?belowRole=${belowRole}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            return result;
        })
        .catch(() => {
            return false})
}

export async function deleteUser(userId) {

    var formdata = new FormData();
    formdata.append("id", userId);
    
    var requestOptions = {
      method: 'DELETE',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/deleteUser?id=14", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
    return result})
      .catch(error => {console.log('error', error);
    return error}
      );
}

export async function addUser(_uName, _fName, _lName, _pass, _role) {
    var formdata = new FormData();
    formdata.append("uName", _uName);
    formdata.append("fName", _fName);
    formdata.append("password", _pass);
    formdata.append("lName", _lName);
    formdata.append("role", _role);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://mira-webschool-80ba75.appdrag.site/api/auth/addUser\n", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
            return result})
              .catch(error => {console.log('error', error);
            return error}
              );
}