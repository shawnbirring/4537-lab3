const http = require("http");
const url = require("url");
const querystring = require("querystring");
const dm = require("./modules/utils");
const msg = require("./locals/en/en");

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  const queryObj = querystring.parse(urlObj.query);
  const name = queryObj.name;

  if (name) {
    const date = dm.getDate();
    const message = msg.replace("{name}", name).replace("{date}", date);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p style="color: blue;">${message}</p>`);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p>Hello, there, provide a name!</p>`);
    res.end();
  }
});

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = server;
