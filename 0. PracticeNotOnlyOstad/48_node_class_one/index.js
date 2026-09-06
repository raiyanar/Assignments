const http = require("http");
const math = require("./math");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write(`<h1>I am Adib Raiyan. Add: ${math.add(3, 4)}</h1>`);
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>It is ABOUT</h1>");
    res.end();
  } else {
    res.write("<h1>404 HTML ERROR.</h1>");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on PORT 4000.");
});
