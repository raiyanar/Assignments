const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const BlogRoutes = require("./controllers/BlogRoutes");

const app = express();
app.use(express.json());

app.use("/", BlogRoutes);

mongoose.connect(MONGO_URI).then(() => {
  console.log("Database is connected now..!");
  app.listen(PORT, () => {
    console.log("Server is running too..!");
  });
});
