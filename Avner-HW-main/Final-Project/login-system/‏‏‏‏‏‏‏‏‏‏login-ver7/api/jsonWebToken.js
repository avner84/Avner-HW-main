const jwt = require('jsonwebtoken');
const SECRET = "sod"

function createToken(user) {
  let token = jwt.sign({ email: user.email, fname: user.fname, lname: user.lname, iat: Math.floor(Date.now() / 1000) }, SECRET, { expiresIn: '3d' });
  return token;
}

function checkToken(token) {

  try {
    let decoded = jwt.verify(token, SECRET);

    return true;
  } catch (err) {
    return false;
    // err
  }

}

function decryptToken(token) {

  const tokenInformation = {}
  jwt.verify(token, SECRET, function (err, decoded) {

    
      tokenInformation.email= decoded.email;
      tokenInformation.fname= decoded.fname;
      tokenInformation.lname= decoded.lname;
      tokenInformation.iat= decoded.iat;
    
  });

  return tokenInformation;
}

module.exports = { createToken, checkToken, decryptToken }

