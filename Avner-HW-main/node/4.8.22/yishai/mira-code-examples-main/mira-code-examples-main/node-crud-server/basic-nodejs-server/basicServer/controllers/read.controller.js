const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../views/read/");
function handleRead(url, method, res) {
  if (url.endsWith(".js")) {
    fs.createReadStream(dataPath + "/read.js").pipe(res);
  } else {
    fs.createReadStream(dataPath + "/read.html").pipe(res);
  }
}

module.exports = handleRead;
