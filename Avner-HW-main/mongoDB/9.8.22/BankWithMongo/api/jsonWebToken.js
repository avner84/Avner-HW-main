var jwt = require('jsonwebtoken');
const SECRET = "sod"

function createToken(){
    var token = jwt.sign({ msg: 'bank token' }, SECRET, { expiresIn: '30m' });
    // console.log('token :', token);

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