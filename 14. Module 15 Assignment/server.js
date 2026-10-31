const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const TodoRoutes = require("./controllers/TodoRoutes");

const app = express();
app.use(express.json());

app.use("/", TodoRoutes);

app.get("/", (req, res) => {
  res.send("To-Do API is running..!");
});

mongoose.connect(MONGO_URI).then(() => {
  console.log("Database is connected now..!");
  app.listen(PORT, () => {
    console.log("Server is running too..!");
  });
});
