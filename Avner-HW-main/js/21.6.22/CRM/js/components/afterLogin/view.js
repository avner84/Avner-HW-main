
const afterLoginDiv = $("#afterLogin")[0];
const addUserDiv = $("#addUserDiv")[0];
const updateUserDiv = $("#updateUserDiv")[0];


let addUserBtn = null;
let addUserForm = null;





export function showUI(user) {
  afterLoginDiv.innerHTML = `<h3>Hye ${user.first_name} ${user.last_name}, You are connected.</h3>`;
  afterLoginDiv.innerHTML += `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Name</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Role</th>
        <th scope="col">Password</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody id="tableId">
      <tr id="thisUserDetails">
        <th scope="row">${user.id}</th>
        <td> ${user.username}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.role}</td>
        <td>${user.password}</td>
        <td><i id="iId${user.id}" class="fa-solid fa-pen-to-square" idOfUser="${user.id}" roleOfUser=${user.role}></i> <i class="fa-solid fa-trash-can" idOfUser="${user.id}" roleOfUser=${user.role}></i></td>
      </tr>
    </tbody>
  </table>`;
  $("#keyboardDiv").fadeOut(500);

  $("#afterLogin").delay(500).fadeIn(800);
}

export function addMoreUsersToTable(users, currentUser) {

  document.getElementById("tableId").innerHTML = "";

  let htmlOfUsers = `<tr id="thisUserDetails">
  <th scope="row">${currentUser.id}</th>
  <td> ${currentUser.username}</td>
  <td>${currentUser.first_name}</td>
  <td>${currentUser.last_name}</td>
  <td>${currentUser.role}</td>
  <td>${currentUser.password}</td>
  <td><i id="iId${currentUser.id}" class="fa-solid fa-pen-to-square" idOfUser="${currentUser.id}" roleOfUser=${currentUser.role}></i> <i class="fa-solid fa-trash-can" idOfUser="${currentUser.id}" roleOfUser=${currentUser.role}></i></td>
</tr>`;

  users.forEach(element => {
    htmlOfUsers += ` <tr>
  <th scope="row">${element.id}</th>
  <td> ${element.username}</td>
  <td>${element.first_name}</td>
  <td>${element.last_name}</td>
  <td>${element.role}</td>
  <td>${element.password}</td>
  <td><i id="iId${element.id}" class="fa-solid fa-pen-to-square" idOfUser="${element.id}" roleOfUser=${element.role}></i> <i class="fa-solid fa-trash-can" idOfUser="${element.id}" roleOfUser=${element.role}></i></td>
</tr>`
  });

  document.getElementById("tableId").innerHTML += htmlOfUsers;


}

export function WarningBeforeDeletion() {
  if (confirm("Are you sure you want to delete the user account?")) {
    return true;
  } else {
    return false;
  }
}


export function clearPageAfterDeleteCurrentUser() {
  if (confirm("Your account has been successfully deleted from the system")) {
    location.reload();
  }

}


export function updateUsersTableAfterDelete(event) {
  const tr = event.target.parentNode.parentNode;
  tr.remove();
}

export function addToPageAddUsersForm(userRole) {

  addUserDiv.innerHTML = `<button id="addUserBtn">Add user</button>
  <form id="addUserForm">
      <div class="form-group">
          <label for="uName">User name:</label>
          <input type="text" class="form-control" id="uName">
      </div>
      <div class="form-group">
          <label for="fName">First name:</label>
          <input type="text" class="form-control" id="fName">
      </div>
      <div class="form-group">
          <label for="lName">Last name:</label>
          <input type="text" class="form-control" id="lName">
      </div>
      <div class="col-auto my-1">
          <label for="selectRole">Role:</label>
          <select class="custom-select mr-sm-2" id="selectRole">
              <option selected>Choose...</option>
              ${userRole == 1 ? `<option value="2">manager (2)</option>
              <option value="3">sales (3)</option>`:
      `<option value="3">sales (3)</option>`
    }
              </select>
              ${userRole == 2 ? `<br><small class="form-text text-muted">You can only add sales.</small>` : ""}
      </div>
      <div class="form-group">
          <label for="pass">Password</label>
          <input type="password" class="form-control" id="pass" pattern="[0-9]{4}">
          <small class="form-text text-muted">The password must be 4 digits long.</small>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
  addUserBtn = $("#addUserBtn")[0];
  addUserForm = $("#addUserForm")[0];
  addUserForm.style.display = "none";



  addUserBtn.addEventListener("click", addUserBtnToggle);

  $("#addUserDiv").delay(500).fadeIn(800);


}

function addUserBtnToggle() {

  updateUserDiv.innerHTML = "";

  if (addUserForm.style.display === "none") {
    addUserForm.style.display = "block";
    addUserBtn.innerHTML = "Hide form";
  } else {
    addUserForm.style.display = "none";
    addUserBtn.innerHTML = "Add user";
  }

}

export function clearFormAfterAddingUser(statusAddUserResult) {

  if (statusAddUserResult == "OK") {
    const addUserForm = $("#addUserForm")[0];

    addUserForm.elements[0].value = "";
    addUserForm.elements[1].value = "";
    addUserForm.elements[2].value = "";
    addUserForm.elements[3].value = "";
    addUserForm.elements[4].value = "";

    setTimeout(function () { alert("User successfully added") }, 50);
  }

  else {
    alert("An error occurred. Please try again or contact your system administrator")
  }

}


export function addToPageEditUsersForm(currentUserRole, updateUser, idOfI) {

  if (addUserForm) { //In case the user is role 3 then there is no user addition form

    if (addUserForm.style.display === "block") {
      addUserForm.style.display = "none";
      addUserBtn.innerHTML = "Add user";
    }
  }

  updateUserDiv.innerHTML = `<h4>Edit user</h4>
  <form action="" id="updateUserForm">
      <div class="form-group">
          <p>Current user name: ${updateUser.username}</p>
          <label for="newUName">New user name:</label>
          <input type="text" class="form-control" id="newUName">
      </div>
      <div class="form-group">
          <p>Current first name: ${updateUser.first_name}</p>
          <label for="newFName">New first name:</label>
          <input type="text" class="form-control" id="newFName">
      </div>
      <div class="form-group">
          <p>Current last name: ${updateUser.last_name}</p>
          <label for="newLName">New last name:</label>
          <input type="text" class="form-control" id="newLName">
      </div>
      <div class="col-auto my-1">
          <p>Current role: ${updateUser.role}</p>


          ${currentUserRole == 1 && updateUser.role != 1 ? `<label for="newSelectRole">New role:</label>
          <select class="custom-select mr-sm-2" id="newSelectRole" required>
              <option value="" selected>Choose...</option>
              <option value="2">manager (2)</option>
              <option value="3">sales (3)</option>
          </select>`:
      `<h5>You are not authorized to change the user role</h5>`
    }      
      </div>
      <div class="form-group">
          <p>Current password: ${updateUser.password}</p>
          <label for="newPass">New password:</label>
          <input type="password" class="form-control" id="newPass" pattern="[0-9]{4}">
          <small class="form-text text-muted">The password must be 4 digits long.</small>
      </div>

      <button type="button" class="btn btn-dark" id="EditUsersFormCloseBtn">Close</button>
      <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
  </form>`;


  const EditUsersFormCloseBtn = $("#EditUsersFormCloseBtn")[0];

  let idOfIElement = document.getElementById(idOfI);
  // console.log('idOfIElement :', idOfIElement);

  EditUsersFormCloseBtn.addEventListener("click", function () {


    updateUserDiv.innerHTML = "";
    idOfIElement.scrollIntoView();
  });


  updateUserDiv.scrollIntoView();

}

export function clearFormAfterEditingUser(statusEditUserResult) {

  if (statusEditUserResult == "OK") {

    updateUserDiv.innerHTML = "";

    setTimeout(function () { alert("The user information has been updated successfully") }, 50);
  }

  else {
    alert("An error occurred. Please try again or contact your system administrator")
  }

}