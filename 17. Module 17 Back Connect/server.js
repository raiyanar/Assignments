const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const serviceSchema = new mongoose.Schema({
  id: Number,
  name: String,
  img: String,
  description: String,
});

const Service = mongoose.model("Service", serviceSchema);

const coursesSchema = new mongoose.Schema({
  title: String,
  content: String,
  img: String,
});

const Course = mongoose.model("Course", coursesSchema);

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.connect(MONGO_URI).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
