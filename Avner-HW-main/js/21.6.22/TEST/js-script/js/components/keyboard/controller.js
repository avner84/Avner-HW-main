import * as viewKeyboard from "./view.js";
import * as modelKeyboard from "./model.js";

var digit = null;
var myTimeout = null;
var userId = "";


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
    myTimeout = null;
    modelKeyboard.checkCode(digitId);
    viewKeyboard.emphasizeDigit(digitId);
    myTimeout = setTimeout(viewKeyboard.clearDigit, 3000);
}