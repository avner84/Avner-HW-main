const bcrypt = require('bcrypt');

async function encryptPass(user) {

    const userPass = user.pass;
    const newPass = await bcrypt.hash(userPass, 10);

    user.pass = newPass;

    return user;
}

module.exports = {encryptPass}