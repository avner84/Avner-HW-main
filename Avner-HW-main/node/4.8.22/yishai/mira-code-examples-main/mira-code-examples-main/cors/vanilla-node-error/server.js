const http = require("http");
const PORT = 5454;
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/getSomthing") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    });
    res.end("hi from cors server");
  }
});

server.listen(PORT);
console.log("serve listening on port ", PORT);

// start server regularly, server html via live server
