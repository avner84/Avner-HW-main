const fs = require("fs");
const readFn = require("./read");
let flag = true;

function deleteProduct(_id) {


    const currentCars = readFn();

    currentCars.forEach((element) => {
        if (!element.id) {
            console.log("error: ID not exists");
            flag = false;
        }
    });


    if (flag) {

        currentCars.forEach((element, index) => {
            if (element.id == _id) {
                currentCars.splice(index, 1);
            }
        });


        fs.writeFileSync("./data.json", JSON.stringify(currentCars));
    }

}

module.exports = deleteProduct;