const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt');
const viewsPath = path.join(__dirname + "/../views");
const dataPath = path.join(__dirname + "/../data");

function getCustomers() {
    const customersList = fs.readFileSync(dataPath + "/customers.json", "utf-8");
    return customersList;
}

async function saveCustomer(customer) {

    const customerPass = customer.pass;
    const customerCode = customer.code;

    const newPass = await bcrypt.hash(customerPass, 10);
    const newCode = await bcrypt.hash(customerCode, 10);

    customer.pass = newPass;
    customer.code = newCode;
    customer.sum = 500;

    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);
    objCustomers.push(customer);

    const customersListStr = JSON.stringify(objCustomers);
    fs.writeFileSync(dataPath + "/customers.json", customersListStr);
}

function checkIfUsernameAvailable(userName) {
    let flag = true;
    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);

    objCustomers.forEach(element => {
        if (element.uName == userName) {
            flag = false;
        }
    });
    return flag;
}


async function loginCheck(user) {

    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);

    for (let i = 0; i < objCustomers.length; i++) {

        if (objCustomers[i].uName == user.uName) {
            const compareResult = await bcrypt.compare(user.pass, objCustomers[i].pass);

            if (compareResult) {
                result = true;
                return {
                    result,
                    user: objCustomers[i]
                }

            }
        }
    }

    return {
        result: false
    };
}

function updateAccountBalance(customer) {

    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);

    for (let i = 0; i < objCustomers.length; i++) {
        if (objCustomers[i].uName == customer.uName) {
            objCustomers[i].sum = customer.sum;


            const customersListStr = JSON.stringify(objCustomers);
            fs.writeFileSync(dataPath + "/customers.json", customersListStr);
            return true;
        }
    }

    return false;


}


async function codeCheck(codeFromClient, codeFromServer) {
    const compareResult = await bcrypt.compare(codeFromClient, codeFromServer);
    return compareResult;
}


function deleteCustomer(uNameCustomerForDelete) {

    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);
    for (let i = 0; i < objCustomers.length; i++) {
        if (objCustomers[i].uName == uNameCustomerForDelete) {
            objCustomers.splice(i, 1);
            const customersListStr = JSON.stringify(objCustomers);
            fs.writeFileSync(dataPath + "/customers.json", customersListStr);
            return true;

        }
    }
    return false;
}

function checkAccountBalance(userName) {

    const customersList = getCustomers();
    const objCustomers = JSON.parse(customersList);

    for (let i = 0; i < objCustomers.length; i++) {
        if (objCustomers[i].uName == userName) {
            return {
                result: true,
                sum: objCustomers[i].sum
            }
        }
    }

    return {result: false}
}

module.exports = { saveCustomer, checkIfUsernameAvailable, loginCheck, updateAccountBalance, codeCheck, deleteCustomer, checkAccountBalance };