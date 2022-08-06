const http = require("http");
const PORT = 5454;
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log("method", method);
  console.log("url", url);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  };
  const allowedMethods = ["OPTIONS", "POST", "GET"];
  if (method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  } else {
    if (allowedMethods.includes(method)) {
      if (url === "/") {
        res.writeHead(200, headers);
        res.end("hi from server");
      }
    } else {
      res.writeHead(405, headers);
      res.writeHead(405, { "content-type": "text/plain" });
      res.end(`method ${method} is not allowed`);
    }
  }
});
server.listen(PORT);
console.log("Server running at http://127.0.0.1:5454/");
