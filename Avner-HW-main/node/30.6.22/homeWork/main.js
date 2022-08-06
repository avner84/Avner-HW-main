const readProductsList = require("./read.js");
const createProductsList = require("./create.js");

const args = process.argv.slice(2);
const func = args[0];

if (args.length > 1) {

    var ProductsListfromClient = args[1];

}

try {
    if (func != "read" && func != "create") {
        throw "function not valid";
    }

    switch (func) {
        case "read":
            readProductsList();
            break;
        case "create":
            createProductsList(ProductsListfromClient);
            break;

    }


} catch (error) {
    console.log("eroor", error);
}