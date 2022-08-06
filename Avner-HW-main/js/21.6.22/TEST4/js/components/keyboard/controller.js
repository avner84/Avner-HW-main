import * as viewKeyboard from "./view.js";
import * as modelKeyboard from "./model.js";
import * as controllerAfterLogin from "../afterLogin/controller.js";

var digit = null;
var myTimeout = null;
var userId = "";
var counter = 0;

const digits = document.querySelectorAll(".digit");


export function initializeKeyboard(_userId) {
    userId = _userId;

    viewKeyboard.showKeyboardPanel();

    $("div.digit").click(function() {
        checkCodeManager(this.id);
    });

    $("body").keypress(function(event) {
        let key = event.key;
        let pattern = /[0-9]/;
        let result = pattern.test(key);

        if (result) {
            checkCodeManager(event.key);
        }
    });
}

function checkCodeManager(digitId) {
    checkCode(digitId);
}

function checkCode(d) {
    digit = d;
    if (myTimeout) {
        clearTimeout(myTimeout);
    }

    myTimeout = setTimeout(clearCheck, 3000);
    checkManager();
}

function clearCheck() {
    modelKeyboard.clearCodeVerification();
    viewKeyboard.clearDigit();
}

async function checkManager() {
    viewKeyboard.emphasizeDigit(digit);
    var resultFromCheck = await modelKeyboard.check(digit);

    if (resultFromCheck.passwordCharactersNumber) {

        var obj = await modelKeyboard.getUser(userId, resultFromCheck.code);

        if (obj.Table.length == 0) {


            counter++;
            viewKeyboard.loginError(counter);
            clearCheck();

            if (counter > 3) {

                $("div.digit").off("click", "**");
                $("body").off("keypress", "**");
            }



        } else if (obj.Table.length > 0) {


            controllerAfterLogin.welcome(obj);


        }



    }



}