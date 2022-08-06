const fs = require("fs");
const readFn = require("./read");
let flag = true;

function create(obj) {
    const currentCars = readFn();

    currentCars.forEach((element) => {
        if (element.id == obj.id) {
            console.log("error: The ID of the new product already exists");
            flag = false;
        }
    });
    if (flag) {
        currentCars.push(obj);
        fs.writeFileSync("./data.json", JSON.stringify(currentCars));
    }
}

module.exports = create;