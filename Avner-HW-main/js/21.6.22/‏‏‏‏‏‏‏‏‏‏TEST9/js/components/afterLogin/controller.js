import * as viewAfterLogin from "./view.js";
import * as modelAfterLogin from "./model.js";
let currentUser = null;
let listOfMoreUsers = [];
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

        viewAfterLogin.addMoreUsersToTable(listOfMoreUsers, currentUser);
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
                let UpdateUsersListObj = await modelAfterLogin.getUpdateUsersList(currentUser.role);

                listOfMoreUsers = UpdateUsersListObj.Table;
                // console.log('UpdateUsersList :', UpdateUsersList);
                // console.log('UpdateUsersList.length :', UpdateUsersList.length);



                if (listOfMoreUsers.length > 0) {
                    document.getElementById("tableId").innerHTML = "";
                    viewAfterLogin.addMoreUsersToTable(listOfMoreUsers, currentUser);
                    addUserDeletionOption();
                    addUserEditOption();

                }
            }
        })

    }


    addUserDeletionOption();
    addUserEditOption();

}

function addUserDeletionOption() {


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

    }))

}

function addUserEditOption() {
    const editBtnsArray = document.querySelectorAll(".fa-pen-to-square")
    editBtnsArray.forEach(el => el.addEventListener('click', async function (event) {
        // let roleOfUser = event.target.getAttribute("roleOfUser");
        let idOfUser = event.target.getAttribute("idOfUser");
        let iId = event.target.getAttribute("id");
        // console.log('iId :', iId);
        // console.log('roleOfUser :', roleOfUser);
        // console.log('idOfUser :', idOfUser);

        let listofAllUsers = [...listOfMoreUsers];
        listofAllUsers.push(currentUser);
        // console.log('listOfMoreUsers :', listOfMoreUsers);
        // console.log('listofAllUsers :', listofAllUsers);
        let userToEdit = null;

        listofAllUsers.forEach(element => {
            if (element.id == idOfUser) {
                userToEdit = element;

            }
        });


        viewAfterLogin.addToPageEditUsersForm(currentUser.role, userToEdit, iId);
        const updateUserForm = document.querySelector("#updateUserForm");
        updateUserForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const newUserName = updateUserForm.elements[0].value == ""? userToEdit.username: updateUserForm.elements[0].value;
            const newFirstName = updateUserForm.elements[1].value == "" ? userToEdit.first_name : updateUserForm.elements[1].value;
            const newLastName = updateUserForm.elements[2].value == "" ? userToEdit.last_name : updateUserForm.elements[2].value;
            const newRole = currentUser.role > 1 ? userToEdit.role : updateUserForm.elements[3].value ; //If the connected user is not an administrator, it is not possible to change the role
            const newPass = updateUserForm.elements[currentUser.role==3? 4 : 3].value;
            


            let resFromCheckName = await modelAfterLogin.CheckIfUserNameAvailable(uName);

            if (resFromCheckName == false) {
                alert("Username is already taken. Try another name");
            }

            else {

                let editUserResult = await modelAfterLogin.editUser(userToEdit.id, newUserName, newFirstName, newLastName, newRole, newPass);
                viewAfterLogin.clearFormAfterEditingUser(editUserResult.status);

                

                let UpdateUsersListObj2 = await modelAfterLogin.getUpdateUsersList(currentUser.role);

                listOfMoreUsers = await UpdateUsersListObj2.Table;
                


                document.getElementById("tableId").innerHTML = "";
                viewAfterLogin.addMoreUsersToTable(listOfMoreUsers, currentUser);
                addUserDeletionOption();
                addUserEditOption();

                

            }

        })

    }))


}