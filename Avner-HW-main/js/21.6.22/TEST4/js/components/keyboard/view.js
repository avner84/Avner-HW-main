const digits = document.querySelectorAll(".digit");
var clickAudio = new Audio('../../../sound/click.mp3');
var policeAudio = new Audio('../../../sound/police-siren.wav');
var digit = "";

export function showKeyboardPanel() {

    $("form").hide();

    $("#keyboardDiv").fadeIn(2000);

}

export function emphasizeDigit(digitId) {

    digit = digitId;

    $(`#${digitId}`)[0].style.color = "red";
    clickAudio.play();

}


export function clearDigit() {


    digits.forEach((dgt) => {
        dgt.style.color = "black";
    });



}

export function loginError(severalAttempts) {

    if (severalAttempts < 3) {

        alert(`Incorrect code!
            You have ${3 - severalAttempts} more attempts`);
    } else {
        policeAudio.play();
        $("#keyboardDiv").hide();
        setTimeout(function() {
            alert(`Too many wrong attempts.
                   Police on the way.`);
        }, 50)
    }

}