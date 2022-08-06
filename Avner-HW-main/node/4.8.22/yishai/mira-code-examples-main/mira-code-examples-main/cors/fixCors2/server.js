const fs = require("fs");
const path = require("path");
const http = require("http");
const PORT = 5454;
const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  if (url === "/") {
    console.log("headers", headers);
    // attach restrictive cors
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:5454",
    });
    const stream = fs.createReadStream(
      path.join(__dirname + "/./www/index.html")
    );
    stream.pipe(res);
  }
  if (url === "/index.js") {
    const stream = fs.createReadStream(
      path.join(__dirname + "/./www/index.js")
    );
    stream.pipe(res);
  }
});
server.listen(PORT);
console.log("Server running at http://127.0.0.1:5454/");
