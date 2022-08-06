const fs = require("fs");


function read() {
    var cart = fs.readFileSync("./data.json", "utf-8");
    var jsonCart = JSON.parse(cart);
    return jsonCart;


}

module.exports = read;