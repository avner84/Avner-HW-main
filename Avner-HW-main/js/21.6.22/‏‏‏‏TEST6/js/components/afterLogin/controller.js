import * as viewAfterLogin from "./view.js";
import * as modelAfterLogin from "./model.js";
let currentUser = null;
let listOfMoreUsers = null;
let list = null;

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