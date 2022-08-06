const http = require("http");
const PORT = 5454;

// CORS error server
const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/") {
    const headers = {
      "content-type": "text/plain",
      loginPath,
    };
    res.writeHead(200, headers);
    res.end("hi from server");
  }
});
server.listen(PORT);
console.log("Server running at http://127.0.0.1:5454/");
