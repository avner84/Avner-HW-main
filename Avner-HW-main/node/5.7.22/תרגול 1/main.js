const args = process.argv.slice(2);
const command = args[0];
var product = "";
if (args.length > 1) {
    product = JSON.parse(args[1]);
}

const readFn = require("./read");
const createFn = require("./create");
const updateFn = require("./update");
const deleteProduct = require("./deleteProduct");
const getSum = require("./getSum");
const sortCart = require("./sortCart");

switch (command) {
    case "read":
        const cart = readFn();
        console.log("cart", cart);
        break;
    case "create":
        createFn(product);
        break;
    case "update":
        updateFn(product);
        break;
    case "delete":
        deleteProduct(product.id);
        break;

    case "getSum":
        getSum();
        break;
    case "sort":
        sortCart(product.param);
        break;
}