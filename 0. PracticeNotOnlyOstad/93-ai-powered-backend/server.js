const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const mongoDBKey = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const ProductController = require("./controllers/ProductController");

app.use(express.json());
app.use("/api", ProductController);

mongoose.connect(mongoDBKey).then(() => {
  console.log("Database is connected..!");
  app.listen(PORT, () => {
    console.log("Server is also running..!!");
  });
});
