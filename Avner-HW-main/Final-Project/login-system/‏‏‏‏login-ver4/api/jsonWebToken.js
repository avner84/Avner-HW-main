const jwt = require('jsonwebtoken');
const SECRET = "sod"

function createToken(){
    let token = jwt.sign({ msg: 'hi token' }, SECRET);
    return token;
}

function checkToken(token){

try {
    let decoded = jwt.verify(token, SECRET);

    return true;
  } catch(err) {
    return false;
    // err
  }
   
}

module.exports={createToken, checkToken}

