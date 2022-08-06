const fs = require("fs");
const readFn = require("./read");

function sortCart(parameter) {
    if (parameter == "price" || parameter == "name") {
        const currentCart = readFn();

        switch (parameter) {
            case "price":
                currentCart.sort((a, b) => {
                    return a.price - b.price;
                });

                break;
            case "name":
                currentCart.sort((a, b) => {
                    let na = a.name.toLowerCase(),
                        nb = b.name.toLowerCase();

                    if (na < nb) {
                        return -1;
                    }
                    if (na > nb) {
                        return 1;
                    }
                    return 0;
                });

                break;
        }
        console.log(currentCart);
    } else {
        console.log("parmeter not valid");
    }
}

module.exports = sortCart;