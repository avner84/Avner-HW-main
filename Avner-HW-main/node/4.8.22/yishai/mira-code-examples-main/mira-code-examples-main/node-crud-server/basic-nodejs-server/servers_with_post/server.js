const http = require("http");
const fs = require("fs");
const path = require("path");
const mainPagePath = path.join(__dirname + "/./www/index.html");
const server = http.createServer(async (req, res) => {
  const { url, method, headers } = req;
  console.log("method", method);
  console.log("url", url);
  if (url === "/" && method === "GET") {
    console.log("hi");
    res.writeHead(200, { "content-type": "text/html" });
    const pageStream = fs.createReadStream(mainPagePath);
    pageStream.pipe(res);
  } else {
    if (method === "POST") {
      const data = [];
      for await (const chunk of req) {
        data.push(chunk);
      }
      const finalData = JSON.parse(Buffer.concat(data).toString("utf-8"));
      res.end(JSON.stringify(finalData));
    }
  }
});

server.listen(5454);
console.log("server listening on 5454");
