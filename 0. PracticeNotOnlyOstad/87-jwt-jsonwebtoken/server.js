const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const b = req.body;
    const newUser = await UserModel.create({
      name: b.name,
      email: b.email,
      password: await bcrypt.hash(b.password, 10),
    });
    res
      .status(201)
      .json({ message: "Registration is successful.", user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server made an error.", error: err.message });
  }
});

const JWT_SECRET = process.env.JWT_SECRET;

app.post("/login", async (req, res) => {
  try {
    const b = req.body;
    const user = await UserModel.findOne({ email: b.email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const isMatched = await bcrypt.compare(b.password, user.password);
    if (isMatched) {
      const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login Successful", user, token });
    } else {
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error while logging in." });
  }
});

app.get("/profile", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  try {
    const t = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(t, JWT_SECRET);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile accessed", user });
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
});

function runServer() {
  const MONGODB_URL = process.env.MONGODB_URL;
  const PORT = process.env.PORT;
  try {
    mongoose.connect(MONGODB_URL).then(() => {
      console.log("DB is Connected..!");
      app.listen(PORT, () => {
        console.log("Server is running too..!");
      });
    });
  } catch (err) {}
}

runServer();
