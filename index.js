const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const date = new Date();
  const urlObj = url.parse(req.url);
  const queryObj = querystring.parse(urlObj.query);
  const name = queryObj.name;

  if (name) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<p style="color: blue;">Hello ${name}, What a beautiful day. Server current date and time is * ${date.toString()}</p>`
    );
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Hello, there, provide a name!</h1>`);
    res.end();
  }
});

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = server;
