const fs = require("fs");
const productsList = fs.readFileSync('./productsList.txt', "utf-8");

function readProductsList() {

    console.log("productsList", productsList);

}

module.exports = readProductsList;