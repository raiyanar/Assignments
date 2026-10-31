const TodoModel = require("../models/TodoModel");

async function createTodo(req, res) {
  const b = req.body;
  try {
    const newTodo = await TodoModel.create({
      title: b.title,
      description: b.description,
      completed: b.completed ?? false,
    });
    res.status(201).json({ newTodo });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while creating a todo..!",
      error: err.message,
    });
  }
}

async function getAllTodos(req, res) {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json({ allTodos });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while getting all todos..!",
      error: err.message,
    });
  }
}

async function getOneTodo(req, res) {
  const id = req.params.id;
  try {
    const particularTodo = await TodoModel.findById(id);
    if (!particularTodo) {
      res.status(404).json("No todo is found with given ID to show you.");
      return;
    }
    res.status(200).json({ particularTodo });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while getting a particular todo..!",
      error: err.message,
    });
  }
}

async function updateOneTodo(req, res) {
  const id = req.params.id;
  const b = req.body;
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      {
        title: b.title,
        description: b.description,
        completed: b.completed,
      },
      { new: true }
    );
    if (!updatedTodo) {
      res.status(404).json("No todo is found with given ID to update.");
      return;
    }
    res.status(200).json({ updatedTodo });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while updating a particular todo..!",
      error: err.message,
    });
  }
}

async function deleteOneTodo(req, res) {
  const id = req.params.id;
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(id);
    if (!deletedTodo) {
      res.status(404).json("No todo is found with given ID to delete.");
      return;
    }
    res.status(200).json({ deletedTodo });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while deleting a particular todo..!",
      error: err.message,
    });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
};
