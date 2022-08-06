import * as viewKeyboard from "./view.js";
import * as modelKeyboard from "./model.js";

var digit = null;
var myTimeout = null;
var userId = "";

const digits = document.querySelectorAll(".digit");
var counter = 0;

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
    var resultFromcheck = await modelKeyboard.check(digit, userId);
    console.log(resultFromcheck);

}