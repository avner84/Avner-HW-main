const http = require("http");
const fs = require("fs");
const PORT = 3434;

// controllers
const readController = require("./controllers/read.controller");

// models
const getModel = require("./model/api/GET");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/") {
    fs.createReadStream("./views/home.html").pipe(res);
  }
  if (url === "/index.js") {
    fs.createReadStream("./views/index.js").pipe(res);
  }

  if (url.startsWith("/read")) {
    readController(url, method, res);
  }

  if (url === "/api/getData") {
    const data = getModel();
    res.end(JSON.stringify(data));
  }
});

server.listen(PORT);
console.log("server listening on ", PORT);
