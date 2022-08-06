
const afterLoginDiv = $("#afterLogin")[0];
const addUserDiv = $("#addUserDiv")[0];
// const addUserBtn = $("#addUserBtn")[0];
// const addUserForm = $("#addUserForm")[0];
let addUserBtn = null;




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
        <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can" idOfUser="${user.id}" roleOfUser=${user.role}></i></td>
      </tr>
    </tbody>
  </table>`;
  $("#keyboardDiv").fadeOut(500);

  $("#afterLogin").delay(500).fadeIn(800);
}

export function addMoreUsersToTable(users) {

  let htmlOfMoreUsers = "";

  users.forEach(element => {
    htmlOfMoreUsers += ` <tr>
  <th scope="row">${element.id}</th>
  <td> ${element.username}</td>
  <td>${element.first_name}</td>
  <td>${element.last_name}</td>
  <td>${element.role}</td>
  <td>${element.password}</td>
  <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can" idOfUser="${element.id}" roleOfUser=${element.role}></i></td>
</tr>`
  });

  document.getElementById("tableId").innerHTML += htmlOfMoreUsers;


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
          <input type="password" class="form-control" id="pass" pattern="[0-9]{4,}">
          <small class="form-text text-muted">Digits only. At least 4 digits..</small>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
  addUserBtn = $("#addUserBtn")[0];

  addUserBtn.addEventListener("click", addUserBtnToggle);

  $("#addUserDiv").delay(500).fadeIn(800);


}

function addUserBtnToggle() {
  const addUserForm = $("#addUserForm")[0];
  if (addUserForm.style.display === "none") {
    addUserForm.style.display = "block";
    addUserBtn.innerHTML = "Hide form";
  } else {
    addUserForm.style.display = "none";
    addUserBtn.innerHTML = "Add user";
  }

}

export function clearFormAfterAddingUser(statusAddUserResult) {

  if (statusAddUserResult == "OK"){
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

