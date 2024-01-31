const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const date = new Date();
  const urlObj = url.parse(req.url);
  const queryObj = querystring.parse(urlObj.query);

  const name = queryObj.name || null;

  if (name) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<h1 style="color: blue;">Hello, ${name}! Date: ${date.toLocaleDateString()}</h1>`
    );
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Hello, World!</h1>`);
    res.end();
  }
});

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = server;
