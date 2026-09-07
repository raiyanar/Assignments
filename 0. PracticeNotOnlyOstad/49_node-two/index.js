const http = require("http");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

const server = http.createServer((req, res) => {
  if (req.url == "/create") {
    fs.writeFile(path.join(dataFolder, "data.txt"), "Hello World!", (err) => {
      if (err) {
        res.end("ERROR");
      } else {
        res.end("File Created.");
      }
    });
  } else if (req.url == "/update") {
    fs.appendFile(path.join(dataFolder, "data.txt"), "MERN STACK", (err) => {
      if (err) {
        res.end("ERROR");
      } else {
        res.end("File Updated.");
      }
    });
  } else if (req.url == "/delete") {
    fs.unlink(path.join(dataFolder, "data.txt"), "MERN STACK", (err) => {
      if (err) {
        res.end("ERROR");
      } else {
        res.end("File Updated.");
      }
    });
  } else if (req.url == "/read") {
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
      if (err) {
        res.end("ERROR");
      } else {
        res.end(data);
      }
    });
  } else {
    res.write("Hello World!");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Listen 4000!");
});
