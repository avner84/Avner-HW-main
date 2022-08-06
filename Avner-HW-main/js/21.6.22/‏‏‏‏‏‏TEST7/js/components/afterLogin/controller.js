import * as viewAfterLogin from "./view.js";
import * as modelAfterLogin from "./model.js";
let currentUser = null;
let listOfMoreUsers = null;
let list = null;
let addUserForm = null;

export async function welcome(obj) {
    console.log("you are login");
    // console.log(obj);
    currentUser = obj.Table[0];

    viewAfterLogin.showUI(currentUser);
    let roleCurrentUser = currentUser.role;

    if (roleCurrentUser < 3) {
        list = await modelAfterLogin.getMoreUsers(roleCurrentUser);
        listOfMoreUsers = list.Table;

        viewAfterLogin.addMoreUsersToTable(listOfMoreUsers);
        viewAfterLogin.addToPageAddUsersForm(roleCurrentUser);
        addUserForm = document.querySelector("#addUserForm");


        addUserForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const uName = addUserForm.elements[0].value;
            const fName = addUserForm.elements[1].value;
            const lName = addUserForm.elements[2].value;
            const role = addUserForm.elements[3].value;
            const pass = addUserForm.elements[4].value;

            let res = await modelAfterLogin.CheckIfUserNameAvailable(uName);

            if (res == false) {
                alert("Username is already taken. Try another name");
            }

            else {

                let addUserResult = await modelAfterLogin.addUser(uName, fName, lName, pass, role);
                viewAfterLogin.clearFormAfterAddingUser(addUserResult.status);
                let UpdateUsersListObj = await modelAfterLogin.getUpdateUsersList(currentUser.id, currentUser.role);

let UpdateUsersList = UpdateUsersListObj.Table;
console.log('UpdateUsersList :', UpdateUsersList);
console.log('UpdateUsersList.length :', UpdateUsersList.length);



                if (UpdateUsersList.length > 0) {
                    document.getElementById("tableId").innerHTML = "";
                    viewAfterLogin.addMoreUsersToTable(UpdateUsersListObj.Table);


                }
            }
        })

    }

    const deleteBtnsArray = document.querySelectorAll(".fa-trash-can")
    deleteBtnsArray.forEach(el => el.addEventListener('click', async function (event) {
        let roleOfUser = event.target.getAttribute("roleOfUser");
        let idOfUser = event.target.getAttribute("idOfUser");

        if (roleOfUser == 1) {
            alert("The administrator account could not be deleted");
        }
        else {
            if (viewAfterLogin.WarningBeforeDeletion(idOfUser)) {
                await modelAfterLogin.deleteUser(idOfUser);



                if (idOfUser == currentUser.id) { //If the user deletes his own account
                    viewAfterLogin.updateUsersTableAfterDelete(event);
                    viewAfterLogin.clearPageAfterDeleteCurrentUser();

                }
                else {

                    viewAfterLogin.updateUsersTableAfterDelete(event);
                }
            }
        }

    }));



}