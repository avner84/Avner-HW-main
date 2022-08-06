const fs = require("fs");
const readFn = require("./read");

sum = 0;

function getSum() {

    const currentCars = readFn();

    currentCars.forEach((element) => {
        sum += parseInt(element.price);
    });

    console.log(sum);

}
module.exports = getSum;