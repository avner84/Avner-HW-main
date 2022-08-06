const fs = require("fs");

function createProductsList(productsList) {

    fs.writeFileSync("./productsList.txt", productsList)
}

module.exports = createProductsList;