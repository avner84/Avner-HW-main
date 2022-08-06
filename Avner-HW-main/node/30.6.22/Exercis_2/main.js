const greetHe = require("./he");
const greetAr = require("./ar");
const greetFr = require("./fr");

const args = process.argv.slice(2);
const name = args[0];
const lang = args[1];

try {
    if (lang != "he" && lang != "ar" && lang != "fr") {
        throw "language vot valid";
    }

    switch (lang) {
        case "he":
            greetHe(name);
            break;
        case "ar":
            greetAr(name);
            break;
        case "fr":
            greetFr(name);
            break;


    }


} catch (error) {
    console.log("eroor", error);
}