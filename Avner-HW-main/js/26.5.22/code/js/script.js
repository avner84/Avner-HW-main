const $ = {
    code: 0,
    codeVerification: "",
    counter: 0,
    digits: document.querySelectorAll(".digit"),
    digit: null,
    myTimeout: null,
};



function enterCode() {
    $.code = document.querySelector("#codeInput").value.toString();

    if ($.code.length != 4) {
        alert(`Code length should be 4 digits`);
    } else {
        alert(`The code has been confirmed in the system`);
        document.querySelector("#step1").remove();
        document.querySelector("#step2").style.display = "block";
    }
}

function clearCheck() {
    $.codeVerification = "";
    $.digits.forEach((dgt) => {
        dgt.style.color = "black";
    });
}

function checkCode(d) {
    $.digit = d;
    if ($.myTimeout) {
        clearTimeout($.myTimeout);
    }

    $.myTimeout = setTimeout(clearCheck, 3000);
    check();
}

function check() {
    $.digit.style.color = "red";
    $.codeVerification += "" + $.digit.id;

    if ($.codeVerification.length == 4) {
        if ($.codeVerification == $.code) {
            setTimeout(function() {
                alert("SUCCESS");
                document.querySelector("#step2").remove();
            }, 10);


        } else {
            $.counter++;
            if ($.counter < 3) {

                setTimeout(function() {
                    clearCheck();
                    alert(`Incorrect code!
                    You have ${3 - $.counter} more attempts`);
                }, 100)



            } else {
                document.querySelector("#step2").remove();

                setTimeout(function() {
                    alert(`Too many wrong attempts.
                Police on the way.`);
                }, 10)


            }
        }
    }
}