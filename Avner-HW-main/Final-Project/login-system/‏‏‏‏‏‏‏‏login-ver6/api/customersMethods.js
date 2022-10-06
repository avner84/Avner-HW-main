const bcrypt = require('bcrypt');

class User {
    constructor(_fnamem, _lname, _email, _pass) {
        this.name = { fname: _fnamem, lname: _lname }
        this.email = _email.toString().toLowerCase();
        this.pass = _pass;
        this.active = false;
                
    }
    activateAccount() {
        this.active = true;
    }

    async encryptPass(psw) {
        const newPass = await bcrypt.hash(psw, 10);
        this.pass = newPass;
    }

}





async function encryptPass(user) {

    const userPass = user.pass;
    const newPass = await bcrypt.hash(userPass, 10);

    user.pass = newPass;

    return user;
}

module.exports = { encryptPass, User }