const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request made ${req}`);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log("Server is running on port 3000");
});
