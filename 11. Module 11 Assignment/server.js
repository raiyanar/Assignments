const express = require("express");
const app = express();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  }),
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(
    `File uploaded successfully: ${req.file.originalname} to the uploads folder at /uploads.`,
  );
});

app.listen(4000, () => {
  console.log("Go to http://localhost:4000");
});
