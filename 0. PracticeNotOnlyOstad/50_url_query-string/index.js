const http = require("http");
const url = require("url");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  const parseURL = url.parse(req.url);
  console.log(parseURL);
  const query = queryString.parse(parseURL.query);
  console.log(query);
});

server.listen(4000, () => {
  console.log("ok");
});
