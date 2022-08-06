const fs = require("fs");
const readFn = require("./read");
let flag = true;

function update(product) {
    try {
        const currentCart = readFn();

        currentCart.forEach((element) => {
            if (!element.id) {
                throw `error: ID of ${element.name} not exists `;
            }

            if (element.id == product.id) {
                // console.log("element.price: ", element.price, ", product.price:", product.price);
                // console.log("element.name ", element.name, ", product.name:", product.name);
                element.price = product.price ? product.price : element.price;
                element.name = product.name ? product.name : element.name;
            }
            fs.writeFileSync("./data.json", JSON.stringify(currentCart));
        });
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = update;