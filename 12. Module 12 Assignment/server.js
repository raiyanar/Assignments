const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URL;

const studentSchema = new mongoose.Schema({
  name: String,
  emai: String,
  age: Number,
  department: String,
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  const newStudent = await Student.create(req.body);
  res.status(201).json(newStudent);
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

app.get("/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.status(200).json(student);
});

async function connectServer() {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("DB Connected.");
      app.listen(PORT, () => {
        console.log("Server running.");
      });
    });
  } catch (err) {
    console.error(err);
  }
}

connectServer();
