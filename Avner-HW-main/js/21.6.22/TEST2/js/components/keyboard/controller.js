import * as viewKeyboard from "./view.js";
import * as modelKeyboard from "./model.js";

var digit = null;
var myTimeout = null;
var userId = "";
var codeVerification = "";
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
    check();
}

function clearCheck() {
    codeVerification = "";
    viewKeyboard.clearDigit();
}

function check() {
    viewKeyboard.emphasizeDigit(digit);

    codeVerification += "" + digit;

    if (codeVerification.length == 4) {
        modelKeyboard.getUser("1", "1111");

        // if (codeVerification == "5555") {
        //     setTimeout(function() {
        //         alert("SUCCESS");
        //     }, 10);

        // } else {
        //     counter++;
        //     if (counter < 3) {

        //         setTimeout(function() {
        //             clearCheck();
        //             alert(`Incorrect code!
        //             You have ${3 - counter} more attempts`);
        //         }, 10)

        //     } else {

        //         setTimeout(function() {
        //             alert(`Too many wrong attempts.
        //         Police on the way.`);
        //         }, 10)

        //     }
        // }
    }
}