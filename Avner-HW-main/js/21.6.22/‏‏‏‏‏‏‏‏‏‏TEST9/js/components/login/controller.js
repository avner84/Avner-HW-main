import * as modelLogin from "./model.js";
import * as viewlLogin from "./view.js";
import * as controllerKeyboard from "../keyboard/controller.js";
const submit = $("#submit")[0];
const uNameInput = $("#uName")[0];

export function init() {
    submit.addEventListener("click", async function(e) {
        e.preventDefault();

        var obj = await modelLogin.checkUserName(uNameInput.value);

        if (obj.Table.length == 0) {
            viewlLogin.uNameNotValid();
        } else if (obj.Table.length > 0) {
            var userId = obj.Table[0].id;
            controllerKeyboard.initializeKeyboard(userId);
        }
    });


}